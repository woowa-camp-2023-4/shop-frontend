import {BASE_DOMAIN} from "@/api/constant";
import axios from "axios";

export const apiClient = axios.create({baseURL: BASE_DOMAIN});