import { prisma } from './client';

const products = [
  {
    slug: 'tote-bag',
    name: 'Tote Bag',
    description:
      'Carry your groceries in an eco-friendly way, repping your favorite Headless CMS.',
    price: 1299,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/m_Ko_QJ_Na_M_Ti62_Nm_KIEDGS_d34b539a0a.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [],
  },
  {
    slug: 'super-super-mug',
    name: 'Super Super Mug',
    description: 'Sip your coffee in style from the new GraphCMS printed mug',
    price: 1499,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Vpp_Bzb2_IQ_0a_Qc5_E_Ho_So0_785ad10a72.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [
      {
        slug: 'summer-vibes',
        name: 'Summer Vibes',
        description: 'Newest products available to nextjsmasters plan!',
      },
    ],
  },
  {
    slug: 'unisex-long-sleeve-tee',
    name: 'Unisex Long Sleeve Tee',
    description:
      'Awesome next13masters.pl Tshirt, available in a variety of colours, and super comfortable. Rep your favorite Headless CMS in style',
    price: 1999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/t0_Fj_Dkv_Rp_Oye_Err_F_Dj8_Q_3ee0d17001.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 't-shirts',
        name: 'T-Shirts',
        description: 'These are awesome t-shirts!',
      },
    ],
    collections: [],
  },
  {
    slug: 'short-sleeve-tee',
    name: 'Short Sleeve Tee',
    description:
      'Just as awesome and comfortable as the Long Sleeved Tee, only with half the sleeves',
    price: 1999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Jm_IF_4mc3_Soyyec2uewvk_edf9443c77.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 't-shirts',
        name: 'T-Shirts',
        description: 'These are awesome t-shirts!',
      },
    ],
    collections: [],
  },
  {
    slug: 'snapback',
    name: 'Snapback',
    description:
      'Get noticed with this casual snapback repping your favorite Headless CMS.',
    price: 1299,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/2r_Esst0_U_Ry6_Ov_WW_Vg_E_Oy_29b4b22edb.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [],
  },
  {
    slug: 'unisex-zip-hoodie',
    name: 'Unisex Zip Hoodie',
    description:
      'Discover our versatile Unisex Zip Hoodie, a perfect addition to your wardrobe. Combining fashion-forward design with cozy functionality, this hoodie offers a flattering fit for everyone. The zip-front closure allows for easy layering, while the premium materials ensure long-lasting wear and exceptional comfort. Elevate your style with our Unisex Zip Hoodie, available in vibrant colors and various sizes. Experience ultimate comfort and modern appeal in one garment',
    price: 3999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Eh3j8w_Ff_Q3i_Q_Rm_Mj_FTQA_78c2b8d6e1.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 'hoodies',
        name: 'Hoodies',
        description: '',
      },
    ],
    collections: [],
  },
  {
    slug: 'backpack',
    name: 'Backpack',
    description:
      'You could fit in just about anything you need on the daily and go easy on your shoulders with the embroidered backpack from GraphCMS',
    price: 4999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Cm_N_Eq9_BQN_Kg8_Mg_Edf_Cvl_79edf70df1.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [
      {
        slug: 'summer-vibes',
        name: 'Summer Vibes',
        description: 'Newest products available to nextjsmasters plan!',
      },
    ],
  },
  {
    slug: 'gradient-hoodie',
    name: 'Gradient Hoodie',
    description: 'Gradient Hoodie.',
    price: 9999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/a_X_Ph_P0_FDQ_8u_Fh0_Sy_XQ_Wh_2f441cf690.png',
      alt: '',
      width: 1024,
      height: 1024,
    },
    categories: [
      {
        slug: 'hoodies',
        name: 'Hoodies',
        description: '',
      },
    ],
    collections: [
      {
        slug: 'summer-vibes',
        name: 'Summer Vibes',
        description: 'Newest products available to nextjsmasters plan!',
      },
    ],
  },
  {
    slug: 'bomber-jacket',
    name: 'Bomber Jacket',
    description: 'A cool bomber jacket.',
    price: 4599,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Eh3j8w_Ff_Q3i_Q_Rm_Mj_FTQA_85ffef4017.png',
      alt: '',
      width: 800,
      height: 800,
    },
    categories: [
      {
        slug: 'hoodies',
        name: 'Hoodies',
        description: '',
      },
    ],
    collections: [],
  },
  {
    slug: 'vivid-cap',
    name: 'Vivid cap',
    description: 'Our most vivid cap.',
    price: 2999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Le_Xqj_A3d_Tl_S6lyl5w87u_5e18f7a94f.png',
      alt: '',
      width: 1024,
      height: 1024,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [
      {
        slug: 'summer-vibes',
        name: 'Summer Vibes',
        description: 'Newest products available to nextjsmasters plan!',
      },
    ],
  },
  {
    slug: 'indie-sunset-t-shirt',
    name: 'Indie Sunset T-Shirt',
    description:
      'Introducing the epitome of hipster fashion: the vibrant hipster orange t-shirt. Crafted from organic cotton, it features a tailored fit, discreet chest pocket, and a bold, audacious hue. Pair it with vintage denim and retro accessories for an effortlessly cool and stylish look that embraces individuality and sets you apart from the mainstream crowd. Unleash your inner hipster with this captivating statement piece',
    price: 4599,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/o_Jzs_J4d_S_Qji_F4_H_Ch2_Nb_Q_c21d9b935d.png',
      alt: '',
      width: 1024,
      height: 1024,
    },
    categories: [
      {
        slug: 't-shirts',
        name: 'T-Shirts',
        description: 'These are awesome t-shirts!',
      },
    ],
    collections: [
      {
        slug: 'new-arrivals',
        name: 'New Arrivals',
        description: 'Collection of vintage throwback nextjsmasters.pl SWAG.',
      },
    ],
  },
  {
    slug: 'urban-vanguard-t-shirt',
    name: 'Urban Vanguard T-Shirt',
    description:
      "Introducing the epitome of edgy hipster style: the hipster green military t-shirt. Inspired by vintage military aesthetics, this t-shirt exudes an air of rugged individualism and effortless cool. Its deep shade of green, reminiscent of classic army fatigues, adds a touch of urban authenticity. Crafted with attention to detail, it features a comfortable yet tailored fit, sturdy construction, and subtle military-inspired accents like epaulettes or a chest pocket. Whether you're exploring the city streets or attending a music festival, this t-shirt effortlessly combines fashion-forward style with a rebellious spirit. Pair it with distressed jeans and combat boots for an effortlessly cool and distinctively hipster look that commands attention. Embrace your inner maverick and conquer the fashion scene with this hipster green military t-shirt",
    price: 5999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/Emkx_T5_NFTBG_Kiriu0_A7e_d13a18a717.png',
      alt: '',
      width: 1024,
      height: 1024,
    },
    categories: [
      {
        slug: 't-shirts',
        name: 'T-Shirts',
        description: 'These are awesome t-shirts!',
      },
    ],
    collections: [
      {
        slug: 'new-arrivals',
        name: 'New Arrivals',
        description: 'Collection of vintage throwback nextjsmasters.pl SWAG.',
      },
    ],
  },
  {
    slug: 'verde-chic-backpack',
    name: 'Verde Chic Backpack',
    description:
      "Introducing the epitome of hipster elegance: the hipster green elegant backpack. This sophisticated accessory combines the allure of vintage aesthetics with a modern twist. Crafted from high-quality materials, its rich green hue exudes a sense of refined style. The minimalist design showcases clean lines, subtle detailing, and a spacious interior, making it perfect for the urban nomad. Whether you're heading to a coffee shop or embarking on an artistic adventure, this backpack effortlessly complements your hipster fashion sensibilities while keeping your essentials organized and close at hand. Elevate your style and make a statement with this hipster green elegant backpack that combines functionality and elegance in perfect harmony",
    price: 15999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/3wjp06_K_St_Gdgdb_SGA_Nr_A_7c5ab88e7d.png',
      alt: '',
      width: 1024,
      height: 1024,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [
      {
        slug: 'elegant-extras',
        name: 'Elegant Extras',
        description: 'Elegant and essential extras from our store.',
      },
    ],
  },
  {
    slug: 'noir-elegance-cup',
    name: 'Noir Elegance Cup',
    description:
      "Introducing the epitome of hipster sophistication: the hipster black elegant thermic cup. This sleek and stylish cup is designed to elevate your hot beverage experience to new heights. With its elegant black exterior, it exudes an air of understated luxury. Crafted with premium materials, it features a double-wall vacuum insulation that keeps your drinks hot for extended periods, ensuring you savor every sip. The minimalist design showcases clean lines, a comfortable grip, and a spill-proof lid that allows for easy, on-the-go sipping. Whether you're enjoying a freshly brewed coffee at a trendy café or sipping a soothing tea at your favorite reading nook, this thermic cup is the perfect accessory for the discerning hipster. Embrace the combination of style and functionality with this hipster black elegant thermic cup, and elevate your beverage game with every sip",
    price: 1999,
    primaryImage: {
      url: 'https://static-ourstore.hyperfunctor.com/uploads/5_NAU_5p_Va_T_Kq1_L_Pbp_Bz_Yn_2e541f02a3.png',
      alt: '',
      width: 1024,
      height: 1024,
    },
    categories: [
      {
        slug: 'accessories',
        name: 'Accessories',
        description: '',
      },
    ],
    collections: [
      {
        slug: 'elegant-extras',
        name: 'Elegant Extras',
        description: 'Elegant and essential extras from our store.',
      },
    ],
  },
].map((product) => ({
  ...product,
  primaryImage: { create: product.primaryImage },
  categories: {
    connectOrCreate: product.categories.map((category) => ({
      where: {
        slug: category.slug,
      },
      create: category,
    })),
  },
  collections: {
    connectOrCreate: product.collections.map((collection) => ({
      where: {
        slug: collection.slug,
      },
      create: collection,
    })),
  },
}));

const createProducts = async () => {
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
};

createProducts()
  .then(() => console.log('Done'))
  .catch((error) => console.log('Error', error));
