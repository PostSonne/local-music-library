import React, { FC, useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { IUserIdentity } from "../model/user";
import { authectificate, IAuthResponse } from "../api/auth";

const Login: React.FC<RouteComponentProps> = () => {
    const [user, setField] = useState<IUserIdentity>({
        username: "",
        password: "",
    });
    const [notification, setNotification] = useState<IAuthResponse | string>("");
    const onInputChange = (fieldName: string) => 
        (e: React.SyntheticEvent<HTMLInputElement>): void => {
            setField({
                ...user,
                [fieldName]: e.currentTarget.value,
            })
        setNotification("")
    };
    const onSubmit = (e: React.SyntheticEvent<HTMLFontElement>): void => {
        e.preventDefault();
        authectificate(user)
        .then(() => {
            navigate(`/propfile`)
        })
        .catch(err => {
            if (err.errorText) {
                setNotification.errorText;
            } else {
                console.warn('request problem', err)
            }
        })
    }
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                {notification ? <div>{notification}</div> : null}
                <input
                    type="text"
                    value={user.username}
                    onChange={onInputChange("username")}
                />
                <input
                    type="text"
                    value={user.password}
                    onChange={onInputChange("password")}
                />
                <button>Sing in</button>
            </form>
        </>
    )
};

export { Login }