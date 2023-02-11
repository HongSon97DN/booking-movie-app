import Axios from "axios";
import { ACCESS_TOKEN, DOMAIN_CINEMA, TOKEN } from "../utils/setting";

export class BothTokenService {
    put = (url, data) => {
        return Axios({
            method: "PUT",
            url: `${DOMAIN_CINEMA}${url}`,
            data,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
                TokenCyberSoft: TOKEN,
            },
        });
    };
    post = (url, data) => {
        return Axios({
            url: `${DOMAIN_CINEMA}${url}`,
            method: "POST",
            data,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
                TokenCyberSoft: TOKEN,
            },
        });
    };
    get = (url) => {
        return Axios({
            method: "GET",
            url: `${DOMAIN_CINEMA}${url}`,
            headers: {
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
                TokenCyberSoft: TOKEN,
            },
        });
    };
    delete = (url) => {
        return Axios({
            method: "DELETE",
            url: `${DOMAIN_CINEMA}${url}`,
            headers: {
                TokenCyberSoft: TOKEN,
                Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem(ACCESS_TOKEN)),
            },
        });
    };
}
export const bothServiceToken = new BothTokenService();
