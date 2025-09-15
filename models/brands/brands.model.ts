import {ApiUrl, FetchGet, FetchGetWithToken, tableName} from "@/app/constants";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";


const BrandsModel = {
    url: `${ApiUrl}${tableName.brands}`,
    GetAllBrands() {
        const {data: brands, error, isLoading}: { data: { data: Brand[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    },
    GetBrandsByLimit(limit: number) {
        const {data: brands, error, isLoading}: { data: { data: Brand[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url + `?limit=${limit}`, FetchGet)
        return {
            data: brands?.data,
            isLoading,
            isError: error
        }
    },
    GetBrandsLimitPage(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const {data: brands, error, isLoading}: { data: { data: Brand[], paging: Paging }, error: Error | any, isLoading: boolean } =
            useSWR(this.url + `?offset=${offset}&limit=${limit}&page=${page}&role=admin`, FetchGet);
        return {
            data: brands?.data,
            paging: brands?.paging,
            isLoading,
            isError: error
        }
    }
}

export default BrandsModel
