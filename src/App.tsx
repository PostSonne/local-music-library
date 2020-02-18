import {
    Link,
    RouteComponentProps,
    Router
} from "@reach/router";
import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { About } from "./About";
import {
    checkAuthStatus,
    logout
} from "./api/auth";
import { SinnedIn } from "./components/SignedIn.";
import { News } from "./News";
import { Login } from "./pages/Login";
import { Profile } from "./Profile";

interface IAppProps extends RouteComponentProps {
    name: string;
    // path: string;
}

const Greeting = styled.div`
    color: red;
`;


const MainWrapper = styled.div``;

const Navigation = styled.div``;

const App: FC<IAppProps> = (props) => {
    return (
        <MainWrapper>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="news">News</Link>
                <Link to="/about/library">Music Library</Link>
                {checkAuthStatus() ? <button onClick={logout}>Signed out</button> : null}
                <Link to="profile">Profile</Link>
            </Navigation>
            <Greeting>
                {/*Hello, {props.name}*/}
            </Greeting>
            {props.children}
        </MainWrapper>
    )
};

const AppWithRoutes = () => {
    return (
        <Router>
            <App path = "/" name = "Kotik">
                <News path="/news"/>
                <About path="/about/:source"/>
                <Login path="/login"/>
                <SinnedIn path="/profile">
                    <Profile path="/" />
                </SinnedIn>
            </App>
        </Router>
    );
};

export { AppWithRoutes }