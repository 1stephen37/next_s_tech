import {
    ApiUrl,
    FetchGet,
    tableName
} from "@/app/constants";
import useSWR from "swr";

const DashboardModel = {
    url: `${ApiUrl}${tableName.dashboard}`,
    GetStatistical() {
        const {data: statistical, error, isLoading}: { data: { data: Statistical }, error: Error | any, isLoading: boolean } =
            useSWR(this.url + '/statistical', FetchGet)
        return {
            data: statistical?.data,
            isLoading,
            isError: error
        }
    },
}

export default DashboardModel
