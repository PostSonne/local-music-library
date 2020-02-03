import {
    Redirect,
    RouteComponentProps
} from "@reach/router";
import React, { FC } from "react";
import { checkAuthStatus } from "../api/auth";

const SinnedIn: FC<RouteComponentProps> = ({children}) => {
    return (
        checkAuthStatus() ? (
            <React.Fragment>{children}</React.Fragment>) : (
            <Redirect to="/login" noThrow={true} /> )
    )
};

export  {SinnedIn}