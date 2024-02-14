import bcrypt from 'bcryptjs';

const data = {
    users: [{
        name: "McDonald",
        email: "mcdonald.musimwa74@gmail.com",
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        name: "Nokubonga",
        email: "nokubongamusimwa@gmail.com",
        password: bcrypt.hashSync('123456'),
        isAdmin: false
    }
    ],
    products: [{
        name: 'Banana',
        slug: 'banana',
        category: 'fruits',
        image: "/images/bananas.jpg",
        price: 15,
        brand: 'Voster',
        rating: 8.5,
        numReviews: 8,
        countInStock: 20,
        description: "Non gmo bananas grown in Burma Valley",
        isFeatured: true,
        banner: '/images/bananas.jpeg'
    },
    {
        name: 'Apple',
        slug: 'apple',
        category: 'fruits',
        image: "/images/apple.jpeg",
        price: 20,
        brand: 'Nyanga',
        rating: 8.7,
        numReviews: 10,
        countInStock: 30,
        description: "Non gmo Apple grown in the rich areas of Nyanga",
        isFeatured: true,
        banner: '/images/apple.jpeg'
    },
    {
        name: 'Grapes',
        slug: 'grapes',
        category: 'fruits',
        image: "/images/grapes.jpeg",
        price: 20,
        brand: 'Cape Wines',
        rating: 5,
        numReviews: 8,
        countInStock: 15,
        description: "Fresh grapes from the plain fields of Capetown",
        isFeatured: true,
        banner: '/images/grapes.jpeg'
    },
    {
        name: 'Avocado',
        slug: 'avocado',
        category: 'vegie',
        image: "/images/avacado.jpeg",
        price: 15.00,
        brand: 'Voster',
        rating: 8.9,
        numReviews: 10,
        countInStock: 50,
        description: "Juicy avacados from the wetty lands of Chimanimani",
        isFeatured: true,
        banner: '/images/avacado.jpeg'
    },
    {
        name: 'strawberry',
        slug: 'strawberry',
        category: 'fruits',
        image: "/images/strawberries.jpeg",
        price: 30,
        brand: 'Voster',
        rating: 7.5,
        numReviews: 5,
        countInStock: 15,
        description: "Non gmo strawberries grown in Burma Valley",
        isFeatured: true,
        banner: '/images/strawberries.jpeg'
    },
    {
        name: 'peaches',
        slug: 'peaches',
        category: 'fruits',
        image: "/images/peaches.jpeg",
        price: 30,
        brand: 'Voster',
        rating: 7.5,
        numReviews: 5,
        countInStock: 15,
        description: "Naturally grawn peaches from Capetown",
        isFeatured: true,
        banner: '/images/peaches.jpeg'
    }
        ,
    {
        name: 'watermelon',
        slug: 'watermelon',
        category: 'fruits',
        image: "/images/watermelon.jpeg",
        price: 70,
        brand: 'Voster',
        rating: 9.7,
        numReviews: 5,
        countInStock: 15,
        description: "Sweet water melon grown in Burma Valley",
        isFeatured: true,
        banner: '/images/watermelon.jpeg'
    },
    {
        name: 'tomatoe',
        slug: 'tomatoe',
        category: 'vegi',
        image: "/images/tomatoes.jpeg",
        price: 20,
        brand: 'Voster',
        rating: 9.7,
        numReviews: 5,
        countInStock: 15,
        description: "Big juicy tomatoes grawn in Vumba",
        isFeatured: true,
        banner: '/images/tomatoes.jpeg'
    }
        , {
        name: 'onion',
        slug: 'onion',
        category: 'vegi',
        image: "/images/onion.jpeg",
        price: 25,
        brand: 'Voster',
        rating: 8.7,
        numReviews: 5,
        countInStock: 15,
        description: "Big onions grown in Burma Valley",
        isFeatured: true,
        banner: '/images/onion.jpeg'
    },
    {
        name: 'broccoli',
        slug: 'broccoli',
        category: 'vegi',
        image: "/images/broccoli.jpeg",
        price: 20,
        brand: 'Voster',
        rating: 8.4,
        numReviews: 5,
        countInStock: 15,
        description: "Organic grown broccoli from Hwedza",
        isFeatured: true,
        banner: '/images/broccoli.jpeg'
    },
    {
        name: 'cauliflower',
        slug: 'cauliflower',
        category: 'vegi',
        image: "/images/cauliflower.jpeg",
        price: 20,
        brand: 'Voster',
        rating: 7.7,
        numReviews: 5,
        countInStock: 15,
        description: "Organic caulifflower grown in Burma Valley",
        isFeatured: true,
        banner: '/images/cauliflower.jpeg'
    }
        ,
    {
        name: 'robots',
        slug: 'robots',
        category: 'vegi',
        image: "/images/robots.jpeg",
        price: 25,
        brand: 'Voster',
        rating: 8.8,
        numReviews: 5,
        countInStock: 15,
        description: "Organic grown from Vumba",
        isFeatured: true,
        banner: '/images/robots.jpeg'
    }





    ]
}

export default data