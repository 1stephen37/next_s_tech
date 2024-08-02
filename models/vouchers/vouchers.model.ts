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
    }
}

export default VouchersModel
