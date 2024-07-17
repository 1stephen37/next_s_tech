import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";


const reviewsModel = {
    url: `${ApiUrl}${tableName.reviews}`,
    GetAllReviewsByIdProduct(id_product: string) {
        const {data: brands, error, isLoading}: { data: { data: Reviews[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    },
}

export default reviewsModel
