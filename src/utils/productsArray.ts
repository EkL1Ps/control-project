export type Product = {
    id: number
    title: string
    price: number
    image: string
    alt: string
    description: string
    categories?: string
    location?: string
    favorite?: boolean
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'Dark earrings',
        price: 10,
        image: '/images/dark-earrings.webp',
        alt: 'dark-earrings',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'earrings',
        location: 'main',
    },
    {
        id: 2,
        title: 'Fancy earrings',
        price: 12,
        image: '/images/fancy-earrings.webp',
        alt: 'fancy-earrings',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'earrings',
    },
    {
        id: 3,
        title: 'Gold necklace',
        price: 100,
        image: '/images/gold-necklace.webp',
        alt: 'gold-necklace',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'necklace',
        location: 'main',
    },
    {
        id: 4,
        title: 'Gold ring',
        price: 35,
        image: '/images/gold-ring.webp',
        alt: 'gold-ring.webp',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'ring',
    },
    {
        id: 5,
        title: 'Head crown',
        price: 1480,
        image: '/images/head-crown.webp',
        alt: 'head-crown',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'crown',
        location: 'main',
    },
    {
        id: 6,
        title: 'Light earrings',
        price: 12,
        image: '/images/light-earrings.webp',
        alt: 'light-earrings',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'earrings',
        location: 'main',
    },
    {
        id: 7,
        title: 'Queen bracelet',
        price: 1120,
        image: '/images/Queen-bracelet.webp',
        alt: 'Queen-bracelet',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'bracelet',
        location: 'main',
    },
    {
        id: 8,
        title: 'Silver ring',
        price: 35,
        image: '/images/Silver-ring.webp',
        alt: 'Silver-ring',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'ring',
    },
    {
        id: 9,
        title: 'Wedding ring',
        price: 320,
        image: '/images/Wedding-ring.webp',
        alt: 'Wedding-ring',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'ring',
        location: 'main',
    },
]

export const getProductObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
