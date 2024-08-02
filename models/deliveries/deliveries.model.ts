import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";


const DeliveriesModel = {
    url: `${ApiUrl}${tableName.deliveries}`,
    GetAllDeliveries() {
        const {data : deliveries, error, isLoading}: { data: { data: Delivery[] }, error: Error | any, isLoading: boolean } =
            useSWR(this.url, FetchGet)
        return {
            data: deliveries?.data,
            isLoading,
            isError: error
        }
    }
}

export default DeliveriesModel
