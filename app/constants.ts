export const ApiUrl = 'http://127.0.0.1:4000/api/v1/';
export const ApiImage = 'http://127.0.0.1:4000/images/uploads/';

export const tableName = {
    brands: 'brands',
    users: 'users',
    products: 'products',
}

export const FetchGet = (url: string) => fetch(url, {
    headers: {'Content-Type': 'application/json'},
    method: "GET"
}).then(res => res.json());

export const FetchGetWithContinueUrl = async (url: string, {arg}: { arg: { continueUrl? : string } }) => {
    console.log(arg.continueUrl);
    return fetch(url + arg?.continueUrl, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
    }).then(res => res.json())
        .catch((err) => err.message)
}

// export const FetchPost = async (url: string, { body } : {body : {}}) => fetch(url, {
//     headers: {'Content-Type': 'application/json'},
//     method: "POST",
//     body: JSON.stringify(body)
// }).then(res => res.json());

export async function FetchPost(url: string, {arg}: { arg: {} }) {
    return fetch(url, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(arg),
    }).then(res => res.json())
        .catch((err) => err.message)
}

export const transformCurrency = (value: number): string => {
    return value.toLocaleString('vi-VN', {style: 'currency', currency: 'VND', currencyDisplay: 'code'});
}
