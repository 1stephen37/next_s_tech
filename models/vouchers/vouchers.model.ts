import {ApiUrl, FetchGet, tableName} from "@/app/constants";
import useSWR from "swr";

const VouchersModel = {
    url: `${ApiUrl}${tableName.vouchers}`,
    GetVoucherByAmount(amount: number) {
        const {data: vouchers, error, isLoading}: {
            data: { data: Voucher[] },
            error: Error | any,
            isLoading: boolean
        } =
            useSWR(this.url + `?amount=${amount}`, FetchGet)
        return {
            data: vouchers?.data,
            isLoading,
            isError: error
        }
    },
    GetVouchersLimitPage(page: number, limit: number) {
        const offset = (page - 1) * limit;
        const {data: voucher, error, isLoading}: {
            data: {
                data: Voucher[]
            },
            error: Error | any,
            isLoading: boolean
        } =
            useSWR(this.url + `?offset=${offset}&limit=${limit}&page=${page}`, FetchGet)
        return {
            data: voucher?.data,
            isLoading,
            isError: error
        }
    }
}

export default VouchersModel
