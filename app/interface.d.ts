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
    }[],
    detail: {
        description: string,
        screen_size: string,
        screen_technology: string,
        resolution: string,
        screen_feature: string,
        refresh_rate: string,
        screen_type: string;
        rear_camera: string;
        rear_video: string;
        camera_features: string;
        front_camera: string;
        front_media: string;
        chipset: string;
        cpu: string;
        gpu: string;
        memory_card_slot: string;
        battery: string;
        charging_technology: string;
        charging_port: string;
        sim: string;
        os: string;
        nfc: boolean;
        network_support: string;
        wifi: string;
        bluetooth: string;
        gps: string;
        size: string;
        weight: number;
        back_material: string;
        frame_material: string;
        ingress_protection: string;
        technology_utilities: string;
        types_of_sensors: string;
        special_features: string;
    }
}


interface User {

}
