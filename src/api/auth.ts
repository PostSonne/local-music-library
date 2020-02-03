import { navigate } from "@reach/router";
import { IUserIdentity } from "../model/user";

export interface IAuthResponse {
    status: number;
    data: string;
    errorText?: string;
}

const checkCredentials = (data: IUserIdentity): boolean => {
    return (
        !!(data.username === "Aliya" && data.password === "12345")
    )
};

export const authectificate =  (data: IUserIdentity): Promise<IAuthResponse> => {
    return new Promise<IAuthResponse>((
        resolve,
        reject
    ) => {
        if (!checkCredentials(data)) {
            reject({
                status: 500,
                errorText: "incorrect_login_or_password",
            })
        }
        window.localStorage.setItem("aliya.authenticated", "true");
        resolve({
            status: 200,
            data: "OK",
        })
    })
};

export const checkAuthStatus = (): boolean => {
    return (
        !!(localStorage.getItem("aliya.authenticated"))
    );
};

export const logout = (): void => {
    window.localStorage.removeItem("aliya.authenticated");
    navigate("/");
};