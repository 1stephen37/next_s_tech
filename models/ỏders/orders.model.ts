import {ApiUrl, FetchGet, FetchPost, tableName} from "@/app/constants";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const OrdersModel = {
    url: `${ApiUrl}${tableName.orders}`,
    CreateOrderWithUser() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/create', FetchPost)
        return {trigger, isMutating, error}
    },
    CreateOrderWithGuest() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/create/guest', FetchPost)
        return {trigger, isMutating, error}
    }
}

export default OrdersModel
