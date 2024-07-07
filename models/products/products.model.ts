import {ApiUrl, FetchGet, FetchPost, tableName} from "@/app/constants";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";


const ProductsModel = {
    url: `${ApiUrl}${tableName.products}`,
    GetSaleProducts(offset: number, limit: number) {
        const {data: products, error, isLoading}: {
            data: { data: ProductBox[] },
            error: Error | any,
            isLoading: boolean
        } =
            useSWR(this.url + `?sale=desc&offset=${offset}&limit=${limit}`, FetchGet)
        return {
            data: products?.data,
            isLoading,
            isError: error
        }
    },
    GetProductById(id: string) {
        const {data: products, error, isLoading}: {
            data: { data: ProductBox[] },
            error: Error | any,
            isLoading: boolean
        } =
            useSWR(this.url + `/detail/${id}`, FetchGet)
        return {
            data: products?.data,
            isLoading,
            isError: error
        }
    },
    GetHotProductsByIdBrand(offset: number, limit: number, id_brand: string) {
        const {trigger, isMutating} =
            useSWRMutation<{ data : ProductBox[]}>(this.url + `?id_brand=${id_brand}&offset=${offset}&limit=${limit}&property=views&sort=desc`, FetchGet)
        return {trigger, isMutating};
    },
}

export default ProductsModel
