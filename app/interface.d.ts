interface Brand {
    id_brand: string;
    name: string;
    description: string;
    status: number
}

interface ProductBox {
    id_product: string;
    name: string,
    image: string,
    brand_name: string,
    price: number,
    sale_off: number,
    views: string
}

interface ProductDetail {
    id_product: string;
    name: string,
    image: string,
    brand_name: string,
    price: number,
    sale_off: number,
    images: string[],
    options: object[],
}


interface User {

}
