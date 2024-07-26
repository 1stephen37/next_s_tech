interface Brand {
    id_brand: string;
    name: string;
    description: string;
    logo: string;
    status: number
}

interface ProductBox {
    id_product: string;
    name: string,
    image: string,
    brand_name: string,
    price: number,
    sale_off: number,
    views: string,
    memory: string,
    color: string,
}

interface ProductDetail {
    id_product: string;
    name: string,
    brand_name: string,
    price: number,
    sale_off: number,
    views: number,
    options: {
        price: string,
        memory: string,
        color: string,
        image: string,
        quantity: number
    }[],
    details: {
        name: string,
        id_specification_category: string,
        detail: {
            name: string;
            value: string
        }[]
    }[]
}


interface User {
    id_user: string,
    name: string,
    avatar: string,
    accessToken: string,
    refreshToken: string,
    role: number
}

interface Reviews {
    id_review: string;
    name: string;
    avatar: string;
    content: string;
    replies: {
        id_user: string;
        content: string;
        created_at: string;
        updated_at: string;
        avatar: string;
        name: string;
    }[];
}

interface Cart {
    id_product: string
    name: string
    originPrice: number,
    salePrice: number,
    image: string,
    color: string,
    memory: string,
    quantity: number,
    stock: number
}
