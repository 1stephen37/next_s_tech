import {
    ApiUrl,
    FetchGet,
    FetchGetWithToken,
    FetchPost,
    FetchPostWithToken,
    GoogleApiUrl,
    tableName
} from "@/app/constants";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const UsersModel = {
    url: `${ApiUrl}${tableName.users}`,
    GetAllBrands() {
        const {data: brands, error, isLoading}: { data: { data: Brand[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    },
    UserSignIn() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/sign-in', FetchPost, {
            onError: (err) => {
                if (err.status === 401) {
                    console.error('Incorrect username or password:', err);
                } else if (err.status === 404) {
                    console.error('Server returned a 404 error:', err);
                } else {
                    console.error('An error occurred:', err);
                }
            }
        })
        return {trigger, isMutating, error};
    },
    UserSignUp() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/sign-up', FetchPost)
        return {trigger, isMutating, error}
    },
    UserSignInWithGoogle() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/google', FetchPost)
        return {trigger, isMutating, error}
    },
    GetInformationFormGoogle() {
        const {trigger, isMutating, error} = useSWRMutation(GoogleApiUrl, FetchGetWithToken)
        return {trigger, isMutating, error}
    }
}

export default UsersModel
