import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";


const BrandsModel = {
    url: `${ApiUrl}${tableName.brands}`,
    GetAllBrands() {
        const { data : brands, error, isLoading } : { data : { data : Brand[]}, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    },
    GetBrandsByLimit(limit: number) {
        const { data : brands, error, isLoading } : { data : { data : Brand[]}, error: Error | any, isLoading: boolean } =
            useSWR(this.url + `?limit=${limit}`, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    }
}

export default BrandsModel
