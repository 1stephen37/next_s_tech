import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";

const BannersModel = {
    url: `${ApiUrl}${tableName.banners}`,
    GetBannersActive() {
        const {data: banners, error, isLoading}: { data: { data: Banner[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: banners?.data,
            isLoading,
            isError: error
        }
    },
}

export default BannersModel
