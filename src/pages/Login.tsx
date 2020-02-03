import { navigate, RouteComponentProps } from "@reach/router";
import React, { useState } from "react";
import { authectificate} from "../api/auth";
import { IUserIdentity } from "../model/user";

const Login: React.FC<RouteComponentProps> = () => {
    const [user, setField] = useState<IUserIdentity>({
        username: "",
        password: "",
    });

    const [notification, setNotification] = useState<string>("");

    const onInputChange = (fieldName: string) => (e: React.SyntheticEvent<HTMLInputElement>): void => {
            setField({
                ...user,
                [fieldName]: e.currentTarget.value,
            });
        setNotification("")
    };

    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        authectificate(user)
        .then(() => {
            navigate(`/profile`)
        })
        .catch(err => {
            if (err.errorText) {
                setNotification(err.errorText);
            } else {
                // tslint:disable-next-line:no-console
                console.warn('request problem', err)
            }
        })
    };

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
                    type="password"
                    value={user.password}
                    onChange={onInputChange("password")}
                />
                <button>Sing in</button>
            </form>
        </>
    )
};

export { Login }