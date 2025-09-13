export const ApiUrl = 'http://127.0.0.1:4000/api/v1/';
export const ApiImage = 'http://127.0.0.1:4000/images/uploads/';
export const GoogleApiUrl = 'https://www.googleapis.com/oauth2/v1/userinfo';

export const tableName = {
    brands: 'brands',
    users: 'users',
    products: 'products',
    reviews: 'reviews',
    deliveries: "deliveries",
    vouchers: "vouchers",
    shop: 'shop',
    orders: 'orders',
    dashboard: 'dashboard',
}

export const clientId = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Freact-oauth.vercel.app%3Fid%3Dauth641516&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow";

export const FetchGet = (url: string) => fetch(url, {
    headers: {'Content-Type': 'application/json'},
    method: "GET"
}).then(res => res.json()).catch(err => err.message);

export const FetchGetWithContinueUrl = async (url: string, {arg}: { arg: { continueUrl?: string } }) => {
    console.log(arg.continueUrl);
    return fetch(url + arg?.continueUrl, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const FetchGetWithToken = async (url: string, {arg}: { arg: { token: string } }) => {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const FetchGetWithTokenAndDynamicIdUser = async (url: string, {arg}: {
    arg: { token: string, id_user: string }
}) => {
    return fetch(url + `?id_user=${arg.id_user}`, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const FetchPostWithTokenFormData = async (url: string, {arg}: {
    arg: { token: string, data: any }
}) => {
    const formData = new FormData();
    for (let key in arg.data) {
        formData.append(key, arg.data[key]);
    }
    console.log(JSON.stringify(formData));
    return fetch(url, {
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": "Bearer " + arg.token
        },
        method: 'POST',
        body: formData
    }).then(res => res.json())
        .catch((err) => err.message)
}


// export const FetchPost = async (url: string, { body } : {body : {}}) => fetch(url, {
//     headers: {'Content-Type': 'application/json'},
//     method: "POST",
//     body: JSON.stringify(body)
// }).then(res => res.json());

export async function FetchPostWithToken(url: string, {arg}: { arg: { token: string, data: any } }) {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'POST',
        body: JSON.stringify(arg.data),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export async function FetchPatchWithTokenUpdate(url: string, {arg}: { arg: { token: string, data: any, id: string } }) {
    return fetch(url + `/update/${arg.id}`, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'PATCH',
        body: JSON.stringify(arg.data),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export async function FetchDeleteWithTokenDelete(url: string, {arg}: { arg: { token: string, id: string } }) {
    return fetch(url + `/delete/${arg.id}`, {
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + arg.token
        },
        method: 'DELETE',
    }).then(res => res.json())
        .catch((err) => err.message)
}

export async function FetchPost(url: string, {arg}: { arg: {} }) {
    return fetch(url, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(arg),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const transformCurrency = (value: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        currencyDisplay: 'code',
    }).format(value);
}


export const ProductStatus = {
    0: "hết hàng",
    1: "đang bán",
    2: "xảy ra lỗi"
} as const;

export const DeliveryStatus = {
    0: "ngưng hoạt động",
    1: "đang hoạt động",
    2: "đang quá tải"
} as const;

export const UserRole = {
    0: "khách hàng",
    1: "quản trị viên"
} as const;

export const BrandStatus = {
    0: "tạm ngừng kinh doanh",
    1: "đang hoạt động"
} as const;

export const OrderStatus = {
    0: "Chờ xác nhận",
    1: "Đã xác nhận",
    2: "Đang giao hàng",
    3: "Đã giao hàng",
    4: "Đã hủy",
} as const;

export type UserRoleKey = keyof typeof UserRole;

export type BrandStatusKey = keyof typeof BrandStatus;

export type OrderStatusKey = keyof typeof OrderStatus;

export type ProductStatusKey = keyof typeof ProductStatus;

export type DeliveryStatusKey = keyof typeof DeliveryStatus;
