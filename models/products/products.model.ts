import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";


const ProductsModel = {
    url: `${ApiUrl}${tableName.products}`,
    GetSaleProducts(offset : number, limit : number) {
        const { data : products, error, isLoading } : { data : { data : ProductBox[]}, error: Error | any, isLoading: boolean } =
            useSWR(this.url + `?sale=desc&offset=${offset}&limit=${limit}`, FetchGet)
        return {
            data: products?.data,
            isLoading,
            isError: error
        }
    },
    GetProductById(id : string) {
        const { data : products, error, isLoading } : { data : { data : ProductBox[]}, error: Error | any, isLoading: boolean } =
            useSWR(this.url + `/detail/${id}`, FetchGet)
        return {
            data: products?.data,
            isLoading,
            isError: error
        }
    }
}

export default ProductsModel
