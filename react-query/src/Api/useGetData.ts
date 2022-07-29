import { useQuery } from "@tanstack/react-query";
import {User} from '../type/index'
import API_URLS from "./endpoints";
import axios from "axios";
import DataQuerykeys from "./data-query-key";

function useGetData()
{
    return useQuery<User[]>(
        [DataQuerykeys.USERDETAILS],

        async () => {
            const {data } = await axios.get(API_URLS.getUser());
            console.log(data);
            // return data.body;
            return data;
          },
          {
            onSuccess: () => {
            },
          },
    )
}
export default useGetData


