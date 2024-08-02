import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";


const ShopModel = {
    url: `${ApiUrl}${tableName.shop}`,
    GetInformationShop() {
        const {data: shop, error, isLoading}: { data: { data: Shop }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: shop?.data,
            isLoading,
            isError: error
        }
    }
}

export default ShopModel
