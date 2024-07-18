import {ApiUrl, FetchGet, FetchPost, tableName} from "@/app/constants";
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
        const {trigger, isMutating} = useSWRMutation(this.url + '/sign-in', FetchPost)
        return {trigger, isMutating};
    },
    UserSignUp() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/sign-up', FetchPost)
        return {trigger, isMutating, error}
    }
}

export default UsersModel
