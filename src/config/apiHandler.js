import axios from "axios";
import { PRODUCTS } from "./apiurl";

export const getProducts = () => {
    return axios.get(PRODUCTS)
}