/// <reference types="stripe-event-types" />

import type Stripe from 'stripe';
import { revalidatePath } from 'next/cache';
import { type NextRequest } from 'next/server';
import { type OrderStatus } from '@/graphql/client';
import { prisma } from '@/db';
import { getStripe, paymentIntentMetadataSchema } from '@/services/payments';

const { STRIPE_WEBHOOK_SECRET_KEY } = process.env;

type PaymentIntentEventTypes =
  | 'payment_intent.processing'
  | 'payment_intent.canceled'
  | 'payment_intent.payment_failed'
  | 'payment_intent.succeeded';

interface PaymentIntentEvent
  extends Stripe.DiscriminatedEvent.PaymentIntentEvent {
  type: PaymentIntentEventTypes;
}

const eventTypeToOrderStatus: Record<PaymentIntentEventTypes, OrderStatus> = {
  'payment_intent.processing': 'AWAITING_PAYMENT',
  'payment_intent.canceled': 'CANCELLED',
  'payment_intent.payment_failed': 'CANCELLED',
  'payment_intent.succeeded': 'PAID',
};

const isPaymentIntentEvent = (
  event: Stripe.DiscriminatedEvent,
): event is PaymentIntentEvent => event.type in eventTypeToOrderStatus;

export async function POST(req: NextRequest): Promise<Response> {
  if (!STRIPE_WEBHOOK_SECRET_KEY) {
    return new Response('No webhook secret', { status: 500 });
  }

  const stripe = getStripe();
  const signature = req.headers.get('stripe-signature');
  let event;

  if (!signature) {
    return new Response('No signature', { status: 400 });
  }

  try {
    event = stripe.webhooks.constructEvent(
      await req.text(),
      signature,
      STRIPE_WEBHOOK_SECRET_KEY,
    ) as Stripe.DiscriminatedEvent;
  } catch (error) {
    return new Response('Invalid event or signature', { status: 400 });
  }

  if (isPaymentIntentEvent(event)) {
    const { orderId } = paymentIntentMetadataSchema.parse(
      event.data.object.metadata,
    );
    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: eventTypeToOrderStatus[event.type],
      },
    });
    revalidatePath('/cart/status');
  }

  return new Response(null, { status: 204 });
}
