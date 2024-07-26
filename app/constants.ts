export const ApiUrl = 'http://127.0.0.1:4000/api/v1/';
export const ApiImage = 'http://127.0.0.1:4000/images/uploads/';
export const GoogleApiUrl = 'https://www.googleapis.com/oauth2/v1/userinfo';

export const tableName = {
    brands: 'brands',
    users: 'users',
    products: 'products',
    reviews: 'reviews',
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
