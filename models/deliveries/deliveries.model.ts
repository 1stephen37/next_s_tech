import {
    ApiUrl, FetchDeleteWithTokenDelete,
    FetchGet, FetchPatchWithTokenUpdate,
    FetchPostWithToken,
    FetchPostWithTokenFormData,
    tableName
} from "@/app/constants";
import useSWR, {mutate} from "swr";
import useSWRMutation from "swr/mutation";


const DeliveriesModel = {
    url: `${ApiUrl}${tableName.deliveries}`,
    GetAllDeliveries() {
        const {data: deliveries, error, isLoading}: {
            data: { data: Delivery[] },
            error: Error | any,
            isLoading: boolean
        } =
            useSWR(this.url, FetchGet)
        return {
            data: deliveries?.data,
            isLoading,
            isError: error
        }
    },
    GetDeliveriesLimitPage(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const {data: deliveries, error, isLoading}: {
            data: {
                data: Delivery[]
            },
            error: Error | any,
            isLoading: boolean
        } =
            useSWR(this.url + `?offset=${offset}&limit=${limit}&page=${page}`, FetchGet, {
                revalidateOnReconnect: true,
                refreshInterval: 100
            })
        return {
            data: deliveries?.data,
            isLoading,
            isError: error
        }
    },
    CreateDelivery() {
        const {trigger, isMutating, error} = useSWRMutation(this.url + '/create', FetchPostWithToken, {
            onSuccess: (data) => {
                mutate(this.url)
                    .then(() => {
                    });
            }
        })
        return {trigger, isMutating, error}
    },
    UpdateDelivery() {
        const {trigger, isMutating, error} = useSWRMutation(this.url, FetchPatchWithTokenUpdate, {
            onSuccess: (data) => {
                mutate(this.url)
                    .then(() => {
                    });
            }
        })
        return {trigger, isMutating, error}
    },
    DeleteDelivery() {
        const {trigger, isMutating, error} = useSWRMutation(this.url, FetchDeleteWithTokenDelete, {
            onSuccess: (data) => {
                mutate(this.url)
                    .then(() => {
                    });
            }
        })
        return {trigger, isMutating, error}
    }
}

export default DeliveriesModel
