import {ApiUrl, FetchGet, FetchPost, tableName} from "@/app/constants";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const reviewsModel = {
    url: `${ApiUrl}${tableName.reviews}`,
    GetAllReviewsByIdProduct(id_product: string) {
        const {data: brands, error, isLoading}: { data: { data: Reviews[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url + `?id_product=${id_product}`, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    },
    CreateNewRepComment() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/reply/add', FetchPost)
        return {trigger, isMutating, error}
    }
}

export default reviewsModel
