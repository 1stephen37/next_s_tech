interface Paging {
    total: number
}

interface Banner {
    id_banner: string
    id_product: string
    slogan: string
    description: string
    status: number
}

interface Brand {
    id_brand: string;
    name: string;
    logo: string;
    status: number,
    count?: number;
}

interface BrandDetail extends Brand {
    products: ProductBox;
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
    status: number
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
    image: string,
    accessToken: string,
    refreshToken: string,
    role: number,
    address: string,
    phone: string,
    email: string
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
    product_name: string;
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

interface Delivery {
    id_delivery: string;
    name: string;
    price: number;
    speed: string;
    status: number;
    created_at: string;
    updated_at: string;
}

interface Voucher {
    id_voucher: string;
    code: string;
    discount: number;
    max_discount: number;
    min_discount: number;
    is_percent: boolean;
    expired: boolean;
    end_date: string;
    created_at: string;
    updated_at: string;
}

interface Shop {
    id_shop: string,
    name: string,
    address: string,
    phone: string,
    email: string,
    status: number
}

interface Order {
    id_delivery?: string,
    id_order?: string,
    code?: string,
    name: string,
    email: string,
    address: string,
    phone: string,
    status: number,
    origin_total: number,
    total: number,
    created_at?: string,
    updated_at?: string,
    receiver_name?: string,
    receiver_email?: string,
    receiver_address?: string,
    receiver_phone?: string,
    distance: number,
    ship_fee: number,
    avatar?: string,
    payment_method: string,
    details?: {
        id_product: string,
        origin_price: number,
        sale_price: number,
        memory: string,
        color: string,
        quantity: number,
        product_name: string,
    }[]
}

interface OrderDetail {
    id_product: string,
    origin_price: number,
    sale_price: number,
    memory: string,
    color: string,
    quantity: number
}

interface Statistical {
    totalRevenue: number,
    sales: number,
    orders: number,
    activeNow: number,
    compare: {
        revenue: number,
        //     "subscriptions": "+1801% from last month",
        //     "sales": "+19% from last month",
        //     "activeNow": "+201 since last hour"
    }
}
