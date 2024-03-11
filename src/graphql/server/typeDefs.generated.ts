import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'category',
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 31, end: 35 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 37, end: 43 },
                  },
                  loc: { start: 37, end: 43 },
                },
                loc: { start: 37, end: 44 },
              },
              directives: [],
              loc: { start: 31, end: 44 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Category',
              loc: { start: 47, end: 55 },
            },
            loc: { start: 47, end: 55 },
          },
          directives: [],
          loc: { start: 22, end: 55 },
        },
      ],
      loc: { start: 0, end: 57 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Category', loc: { start: 64, end: 72 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 77, end: 79 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 81, end: 83 } },
              loc: { start: 81, end: 83 },
            },
            loc: { start: 81, end: 84 },
          },
          directives: [],
          loc: { start: 77, end: 84 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 87, end: 91 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 93, end: 99 },
              },
              loc: { start: 93, end: 99 },
            },
            loc: { start: 93, end: 100 },
          },
          directives: [],
          loc: { start: 87, end: 100 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 103, end: 107 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 109, end: 115 },
              },
              loc: { start: 109, end: 115 },
            },
            loc: { start: 109, end: 116 },
          },
          directives: [],
          loc: { start: 103, end: 116 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 119, end: 130 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 132, end: 138 },
              },
              loc: { start: 132, end: 138 },
            },
            loc: { start: 132, end: 139 },
          },
          directives: [],
          loc: { start: 119, end: 139 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 142, end: 150 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 151, end: 156 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 158, end: 161 },
                },
                loc: { start: 158, end: 161 },
              },
              directives: [],
              loc: { start: 151, end: 161 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 163, end: 167 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 169, end: 172 },
                },
                loc: { start: 169, end: 172 },
              },
              directives: [],
              loc: { start: 163, end: 172 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 175, end: 186 },
              },
              loc: { start: 175, end: 186 },
            },
            loc: { start: 175, end: 187 },
          },
          directives: [],
          loc: { start: 142, end: 187 },
        },
      ],
      loc: { start: 59, end: 189 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 202, end: 207 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'collection',
            loc: { start: 212, end: 222 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 223, end: 227 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 229, end: 235 },
                  },
                  loc: { start: 229, end: 235 },
                },
                loc: { start: 229, end: 236 },
              },
              directives: [],
              loc: { start: 223, end: 236 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Collection',
              loc: { start: 239, end: 249 },
            },
            loc: { start: 239, end: 249 },
          },
          directives: [],
          loc: { start: 212, end: 249 },
        },
      ],
      loc: { start: 190, end: 251 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Collection',
        loc: { start: 258, end: 268 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 273, end: 275 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 277, end: 279 },
              },
              loc: { start: 277, end: 279 },
            },
            loc: { start: 277, end: 280 },
          },
          directives: [],
          loc: { start: 273, end: 280 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'slug', loc: { start: 283, end: 287 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 289, end: 295 },
              },
              loc: { start: 289, end: 295 },
            },
            loc: { start: 289, end: 296 },
          },
          directives: [],
          loc: { start: 283, end: 296 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 299, end: 303 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 305, end: 311 },
              },
              loc: { start: 305, end: 311 },
            },
            loc: { start: 305, end: 312 },
          },
          directives: [],
          loc: { start: 299, end: 312 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 315, end: 326 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 328, end: 334 },
              },
              loc: { start: 328, end: 334 },
            },
            loc: { start: 328, end: 335 },
          },
          directives: [],
          loc: { start: 315, end: 335 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 338, end: 346 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 347, end: 352 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 354, end: 357 },
                },
                loc: { start: 354, end: 357 },
              },
              directives: [],
              loc: { start: 347, end: 357 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 359, end: 363 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 365, end: 368 },
                },
                loc: { start: 365, end: 368 },
              },
              directives: [],
              loc: { start: 359, end: 368 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 371, end: 382 },
              },
              loc: { start: 371, end: 382 },
            },
            loc: { start: 371, end: 383 },
          },
          directives: [],
          loc: { start: 338, end: 383 },
        },
      ],
      loc: { start: 253, end: 385 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Image', loc: { start: 391, end: 396 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 401, end: 403 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 405, end: 407 },
              },
              loc: { start: 405, end: 407 },
            },
            loc: { start: 405, end: 408 },
          },
          directives: [],
          loc: { start: 401, end: 408 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'url', loc: { start: 411, end: 414 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 416, end: 422 },
              },
              loc: { start: 416, end: 422 },
            },
            loc: { start: 416, end: 423 },
          },
          directives: [],
          loc: { start: 411, end: 423 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'alt', loc: { start: 426, end: 429 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 431, end: 437 },
              },
              loc: { start: 431, end: 437 },
            },
            loc: { start: 431, end: 438 },
          },
          directives: [],
          loc: { start: 426, end: 438 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'width', loc: { start: 441, end: 446 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 448, end: 451 },
              },
              loc: { start: 448, end: 451 },
            },
            loc: { start: 448, end: 452 },
          },
          directives: [],
          loc: { start: 441, end: 452 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'height',
            loc: { start: 455, end: 461 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 463, end: 466 },
              },
              loc: { start: 463, end: 466 },
            },
            loc: { start: 463, end: 467 },
          },
          directives: [],
          loc: { start: 455, end: 467 },
        },
      ],
      loc: { start: 386, end: 469 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ListMeta', loc: { start: 475, end: 483 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'count', loc: { start: 488, end: 493 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 495, end: 498 },
              },
              loc: { start: 495, end: 498 },
            },
            loc: { start: 495, end: 499 },
          },
          directives: [],
          loc: { start: 488, end: 499 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'total', loc: { start: 502, end: 507 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 509, end: 512 },
              },
              loc: { start: 509, end: 512 },
            },
            loc: { start: 509, end: 513 },
          },
          directives: [],
          loc: { start: 502, end: 513 },
        },
      ],
      loc: { start: 470, end: 515 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 528, end: 533 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'order', loc: { start: 538, end: 543 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'id',
                loc: { start: 544, end: 546 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 548, end: 550 },
                  },
                  loc: { start: 548, end: 550 },
                },
                loc: { start: 548, end: 551 },
              },
              directives: [],
              loc: { start: 544, end: 551 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'status',
                loc: { start: 553, end: 559 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'OrderStatus',
                  loc: { start: 561, end: 572 },
                },
                loc: { start: 561, end: 572 },
              },
              directives: [],
              loc: { start: 553, end: 572 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Order',
              loc: { start: 575, end: 580 },
            },
            loc: { start: 575, end: 580 },
          },
          directives: [],
          loc: { start: 538, end: 580 },
        },
      ],
      loc: { start: 516, end: 582 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 596, end: 604 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderCreate',
            loc: { start: 609, end: 620 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 622, end: 627 },
              },
              loc: { start: 622, end: 627 },
            },
            loc: { start: 622, end: 628 },
          },
          directives: [],
          loc: { start: 609, end: 628 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderAddItem',
            loc: { start: 631, end: 643 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderId',
                loc: { start: 644, end: 651 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 653, end: 655 },
                  },
                  loc: { start: 653, end: 655 },
                },
                loc: { start: 653, end: 656 },
              },
              directives: [],
              loc: { start: 644, end: 656 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 658, end: 667 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 669, end: 671 },
                  },
                  loc: { start: 669, end: 671 },
                },
                loc: { start: 669, end: 672 },
              },
              directives: [],
              loc: { start: 658, end: 672 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 675, end: 680 },
              },
              loc: { start: 675, end: 680 },
            },
            loc: { start: 675, end: 681 },
          },
          directives: [],
          loc: { start: 631, end: 681 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderRemoveItem',
            loc: { start: 684, end: 699 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderId',
                loc: { start: 700, end: 707 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 709, end: 711 },
                  },
                  loc: { start: 709, end: 711 },
                },
                loc: { start: 709, end: 712 },
              },
              directives: [],
              loc: { start: 700, end: 712 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 714, end: 723 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 725, end: 727 },
                  },
                  loc: { start: 725, end: 727 },
                },
                loc: { start: 725, end: 728 },
              },
              directives: [],
              loc: { start: 714, end: 728 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 731, end: 736 },
              },
              loc: { start: 731, end: 736 },
            },
            loc: { start: 731, end: 737 },
          },
          directives: [],
          loc: { start: 684, end: 737 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'orderChangeItemQuantity',
            loc: { start: 740, end: 763 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'orderId',
                loc: { start: 764, end: 771 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 773, end: 775 },
                  },
                  loc: { start: 773, end: 775 },
                },
                loc: { start: 773, end: 776 },
              },
              directives: [],
              loc: { start: 764, end: 776 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 778, end: 787 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 789, end: 791 },
                  },
                  loc: { start: 789, end: 791 },
                },
                loc: { start: 789, end: 792 },
              },
              directives: [],
              loc: { start: 778, end: 792 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'quantity',
                loc: { start: 794, end: 802 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: { start: 804, end: 807 },
                  },
                  loc: { start: 804, end: 807 },
                },
                loc: { start: 804, end: 808 },
              },
              directives: [],
              loc: { start: 794, end: 808 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Order',
                loc: { start: 811, end: 816 },
              },
              loc: { start: 811, end: 816 },
            },
            loc: { start: 811, end: 817 },
          },
          directives: [],
          loc: { start: 740, end: 817 },
        },
      ],
      loc: { start: 584, end: 819 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'OrderStatus',
        loc: { start: 826, end: 837 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'AWAITING_PAYMENT',
            loc: { start: 842, end: 858 },
          },
          directives: [],
          loc: { start: 842, end: 858 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'CANCELLED',
            loc: { start: 861, end: 870 },
          },
          directives: [],
          loc: { start: 861, end: 870 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'CREATED',
            loc: { start: 873, end: 880 },
          },
          directives: [],
          loc: { start: 873, end: 880 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'PAID', loc: { start: 883, end: 887 } },
          directives: [],
          loc: { start: 883, end: 887 },
        },
      ],
      loc: { start: 821, end: 889 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'OrderItem', loc: { start: 896, end: 905 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 910, end: 912 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 914, end: 916 },
              },
              loc: { start: 914, end: 916 },
            },
            loc: { start: 914, end: 917 },
          },
          directives: [],
          loc: { start: 910, end: 917 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'quantity',
            loc: { start: 920, end: 928 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 930, end: 933 },
              },
              loc: { start: 930, end: 933 },
            },
            loc: { start: 930, end: 934 },
          },
          directives: [],
          loc: { start: 920, end: 934 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 937, end: 944 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Product',
                loc: { start: 946, end: 953 },
              },
              loc: { start: 946, end: 953 },
            },
            loc: { start: 946, end: 954 },
          },
          directives: [],
          loc: { start: 937, end: 954 },
        },
      ],
      loc: { start: 891, end: 956 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Order', loc: { start: 963, end: 968 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 973, end: 975 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 977, end: 979 },
              },
              loc: { start: 977, end: 979 },
            },
            loc: { start: 977, end: 980 },
          },
          directives: [],
          loc: { start: 973, end: 980 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'status',
            loc: { start: 983, end: 989 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'OrderStatus',
                loc: { start: 991, end: 1002 },
              },
              loc: { start: 991, end: 1002 },
            },
            loc: { start: 991, end: 1003 },
          },
          directives: [],
          loc: { start: 983, end: 1003 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'items',
            loc: { start: 1006, end: 1011 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'OrderItem',
                    loc: { start: 1014, end: 1023 },
                  },
                  loc: { start: 1014, end: 1023 },
                },
                loc: { start: 1014, end: 1024 },
              },
              loc: { start: 1013, end: 1025 },
            },
            loc: { start: 1013, end: 1026 },
          },
          directives: [],
          loc: { start: 1006, end: 1026 },
        },
      ],
      loc: { start: 958, end: 1028 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1041, end: 1046 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'product',
            loc: { start: 1051, end: 1058 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'slug',
                loc: { start: 1059, end: 1063 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1065, end: 1071 },
                  },
                  loc: { start: 1065, end: 1071 },
                },
                loc: { start: 1065, end: 1072 },
              },
              directives: [],
              loc: { start: 1059, end: 1072 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Product',
              loc: { start: 1075, end: 1082 },
            },
            loc: { start: 1075, end: 1082 },
          },
          directives: [],
          loc: { start: 1051, end: 1082 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'products',
            loc: { start: 1085, end: 1093 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'first',
                loc: { start: 1094, end: 1099 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 1101, end: 1104 },
                },
                loc: { start: 1101, end: 1104 },
              },
              directives: [],
              loc: { start: 1094, end: 1104 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'skip',
                loc: { start: 1106, end: 1110 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'Int',
                  loc: { start: 1112, end: 1115 },
                },
                loc: { start: 1112, end: 1115 },
              },
              directives: [],
              loc: { start: 1106, end: 1115 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'ids',
                loc: { start: 1117, end: 1120 },
              },
              type: {
                kind: 'ListType',
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: {
                      kind: 'Name',
                      value: 'ID',
                      loc: { start: 1123, end: 1125 },
                    },
                    loc: { start: 1123, end: 1125 },
                  },
                  loc: { start: 1123, end: 1126 },
                },
                loc: { start: 1122, end: 1127 },
              },
              directives: [],
              loc: { start: 1117, end: 1127 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'search',
                loc: { start: 1129, end: 1135 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                  loc: { start: 1137, end: 1143 },
                },
                loc: { start: 1137, end: 1143 },
              },
              directives: [],
              loc: { start: 1129, end: 1143 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'sortBy',
                loc: { start: 1145, end: 1151 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductsSortBy',
                  loc: { start: 1153, end: 1167 },
                },
                loc: { start: 1153, end: 1167 },
              },
              directives: [],
              loc: { start: 1145, end: 1167 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'sortDirection',
                loc: { start: 1169, end: 1182 },
              },
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'ProductsSortDirection',
                  loc: { start: 1184, end: 1205 },
                },
                loc: { start: 1184, end: 1205 },
              },
              directives: [],
              loc: { start: 1169, end: 1205 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ProductList',
                loc: { start: 1208, end: 1219 },
              },
              loc: { start: 1208, end: 1219 },
            },
            loc: { start: 1208, end: 1220 },
          },
          directives: [],
          loc: { start: 1085, end: 1220 },
        },
      ],
      loc: { start: 1029, end: 1222 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Product', loc: { start: 1229, end: 1236 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1241, end: 1243 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1245, end: 1247 },
              },
              loc: { start: 1245, end: 1247 },
            },
            loc: { start: 1245, end: 1248 },
          },
          directives: [],
          loc: { start: 1241, end: 1248 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'slug',
            loc: { start: 1251, end: 1255 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1257, end: 1263 },
              },
              loc: { start: 1257, end: 1263 },
            },
            loc: { start: 1257, end: 1264 },
          },
          directives: [],
          loc: { start: 1251, end: 1264 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'name',
            loc: { start: 1267, end: 1271 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1273, end: 1279 },
              },
              loc: { start: 1273, end: 1279 },
            },
            loc: { start: 1273, end: 1280 },
          },
          directives: [],
          loc: { start: 1267, end: 1280 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'description',
            loc: { start: 1283, end: 1294 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1296, end: 1302 },
              },
              loc: { start: 1296, end: 1302 },
            },
            loc: { start: 1296, end: 1303 },
          },
          directives: [],
          loc: { start: 1283, end: 1303 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'price',
            loc: { start: 1306, end: 1311 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 1313, end: 1316 },
              },
              loc: { start: 1313, end: 1316 },
            },
            loc: { start: 1313, end: 1317 },
          },
          directives: [],
          loc: { start: 1306, end: 1317 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'rating',
            loc: { start: 1320, end: 1326 },
          },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Float',
              loc: { start: 1328, end: 1333 },
            },
            loc: { start: 1328, end: 1333 },
          },
          directives: [],
          loc: { start: 1320, end: 1333 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'images',
            loc: { start: 1336, end: 1342 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Image',
                    loc: { start: 1345, end: 1350 },
                  },
                  loc: { start: 1345, end: 1350 },
                },
                loc: { start: 1345, end: 1351 },
              },
              loc: { start: 1344, end: 1352 },
            },
            loc: { start: 1344, end: 1353 },
          },
          directives: [],
          loc: { start: 1336, end: 1353 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviews',
            loc: { start: 1356, end: 1363 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Review',
                    loc: { start: 1366, end: 1372 },
                  },
                  loc: { start: 1366, end: 1372 },
                },
                loc: { start: 1366, end: 1373 },
              },
              loc: { start: 1365, end: 1374 },
            },
            loc: { start: 1365, end: 1375 },
          },
          directives: [],
          loc: { start: 1356, end: 1375 },
        },
      ],
      loc: { start: 1224, end: 1377 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductList',
        loc: { start: 1384, end: 1395 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'data',
            loc: { start: 1400, end: 1404 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Product',
                    loc: { start: 1407, end: 1414 },
                  },
                  loc: { start: 1407, end: 1414 },
                },
                loc: { start: 1407, end: 1415 },
              },
              loc: { start: 1406, end: 1416 },
            },
            loc: { start: 1406, end: 1417 },
          },
          directives: [],
          loc: { start: 1400, end: 1417 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'meta',
            loc: { start: 1420, end: 1424 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ListMeta',
                loc: { start: 1426, end: 1434 },
              },
              loc: { start: 1426, end: 1434 },
            },
            loc: { start: 1426, end: 1435 },
          },
          directives: [],
          loc: { start: 1420, end: 1435 },
        },
      ],
      loc: { start: 1379, end: 1437 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductsSortBy',
        loc: { start: 1444, end: 1458 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'PRICE',
            loc: { start: 1463, end: 1468 },
          },
          directives: [],
          loc: { start: 1463, end: 1468 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'RATING',
            loc: { start: 1471, end: 1477 },
          },
          directives: [],
          loc: { start: 1471, end: 1477 },
        },
      ],
      loc: { start: 1439, end: 1479 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: {
        kind: 'Name',
        value: 'ProductsSortDirection',
        loc: { start: 1486, end: 1507 },
      },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'ASC', loc: { start: 1512, end: 1515 } },
          directives: [],
          loc: { start: 1512, end: 1515 },
        },
        {
          kind: 'EnumValueDefinition',
          name: {
            kind: 'Name',
            value: 'DESC',
            loc: { start: 1518, end: 1522 },
          },
          directives: [],
          loc: { start: 1518, end: 1522 },
        },
      ],
      loc: { start: 1481, end: 1524 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1537, end: 1542 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviews',
            loc: { start: 1547, end: 1554 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 1555, end: 1564 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1566, end: 1568 },
                  },
                  loc: { start: 1566, end: 1568 },
                },
                loc: { start: 1566, end: 1569 },
              },
              directives: [],
              loc: { start: 1555, end: 1569 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Review',
                    loc: { start: 1573, end: 1579 },
                  },
                  loc: { start: 1573, end: 1579 },
                },
                loc: { start: 1573, end: 1580 },
              },
              loc: { start: 1572, end: 1581 },
            },
            loc: { start: 1572, end: 1582 },
          },
          directives: [],
          loc: { start: 1547, end: 1582 },
        },
      ],
      loc: { start: 1525, end: 1584 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1598, end: 1606 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'reviewCreate',
            loc: { start: 1611, end: 1623 },
          },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'productId',
                loc: { start: 1624, end: 1633 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'ID',
                    loc: { start: 1635, end: 1637 },
                  },
                  loc: { start: 1635, end: 1637 },
                },
                loc: { start: 1635, end: 1638 },
              },
              directives: [],
              loc: { start: 1624, end: 1638 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'author',
                loc: { start: 1640, end: 1646 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1648, end: 1654 },
                  },
                  loc: { start: 1648, end: 1654 },
                },
                loc: { start: 1648, end: 1655 },
              },
              directives: [],
              loc: { start: 1640, end: 1655 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'email',
                loc: { start: 1657, end: 1662 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1664, end: 1670 },
                  },
                  loc: { start: 1664, end: 1670 },
                },
                loc: { start: 1664, end: 1671 },
              },
              directives: [],
              loc: { start: 1657, end: 1671 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'title',
                loc: { start: 1673, end: 1678 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1680, end: 1686 },
                  },
                  loc: { start: 1680, end: 1686 },
                },
                loc: { start: 1680, end: 1687 },
              },
              directives: [],
              loc: { start: 1673, end: 1687 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'content',
                loc: { start: 1689, end: 1696 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'String',
                    loc: { start: 1698, end: 1704 },
                  },
                  loc: { start: 1698, end: 1704 },
                },
                loc: { start: 1698, end: 1705 },
              },
              directives: [],
              loc: { start: 1689, end: 1705 },
            },
            {
              kind: 'InputValueDefinition',
              name: {
                kind: 'Name',
                value: 'rating',
                loc: { start: 1707, end: 1713 },
              },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'Int',
                    loc: { start: 1715, end: 1718 },
                  },
                  loc: { start: 1715, end: 1718 },
                },
                loc: { start: 1715, end: 1719 },
              },
              directives: [],
              loc: { start: 1707, end: 1719 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Review',
                loc: { start: 1722, end: 1728 },
              },
              loc: { start: 1722, end: 1728 },
            },
            loc: { start: 1722, end: 1729 },
          },
          directives: [],
          loc: { start: 1611, end: 1729 },
        },
      ],
      loc: { start: 1586, end: 1731 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Review', loc: { start: 1738, end: 1744 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1749, end: 1751 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'ID',
                loc: { start: 1753, end: 1755 },
              },
              loc: { start: 1753, end: 1755 },
            },
            loc: { start: 1753, end: 1756 },
          },
          directives: [],
          loc: { start: 1749, end: 1756 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'author',
            loc: { start: 1759, end: 1765 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1767, end: 1773 },
              },
              loc: { start: 1767, end: 1773 },
            },
            loc: { start: 1767, end: 1774 },
          },
          directives: [],
          loc: { start: 1759, end: 1774 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'title',
            loc: { start: 1777, end: 1782 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1784, end: 1790 },
              },
              loc: { start: 1784, end: 1790 },
            },
            loc: { start: 1784, end: 1791 },
          },
          directives: [],
          loc: { start: 1777, end: 1791 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'content',
            loc: { start: 1794, end: 1801 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'String',
                loc: { start: 1803, end: 1809 },
              },
              loc: { start: 1803, end: 1809 },
            },
            loc: { start: 1803, end: 1810 },
          },
          directives: [],
          loc: { start: 1794, end: 1810 },
        },
        {
          kind: 'FieldDefinition',
          name: {
            kind: 'Name',
            value: 'rating',
            loc: { start: 1813, end: 1819 },
          },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: {
                kind: 'Name',
                value: 'Int',
                loc: { start: 1821, end: 1824 },
              },
              loc: { start: 1821, end: 1824 },
            },
            loc: { start: 1821, end: 1825 },
          },
          directives: [],
          loc: { start: 1813, end: 1825 },
        },
      ],
      loc: { start: 1733, end: 1827 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 1833, end: 1838 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1828, end: 1838 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: {
        kind: 'Name',
        value: 'Mutation',
        loc: { start: 1845, end: 1853 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1840, end: 1853 },
    },
  ],
  loc: { start: 0, end: 1854 },
} as unknown as DocumentNode;
