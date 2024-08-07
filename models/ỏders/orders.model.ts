import {
    ApiUrl,
    FetchGet,
    FetchGetWithToken,
    FetchGetWithTokenAndDynamicIdUser,
    FetchPost,
    tableName
} from "@/app/constants";
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
    },
    GetOrdersLimitPage(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const {
            trigger,
            isMutating,
            error
        } = useSWRMutation(this.url + `?offset=${offset}&limit=${limit}&page=${page}`, FetchGetWithToken);
        return {trigger, isMutating, error}
    },
    GetHistoryOrdersByIdUser() {
        const {trigger, isMutating, error} = useSWRMutation(this.url, FetchGetWithTokenAndDynamicIdUser)
        return {trigger, isMutating, error}
    },
    UpdateOrderStatus() {
        const {trigger, isMutating, error} = useSWRMutation(this.url, FetchGetWithTokenAndDynamicIdUser)
        return {trigger, isMutating, error}
    }
}

export default OrdersModel
