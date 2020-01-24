import {
    Link,
    RouteComponentProps,
    Router
} from "@reach/router";
import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { About } from "./About";
import { News } from "./News";

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
            </Navigation>
            <Greeting>
                Hello, {props.name}
            </Greeting>
            {props.children}
        </MainWrapper>
    )
};

const AppWithRoutes = () => {
    return (
        <Router>
            <App path = "/" name = "Kotik">
                {/*<Main path="/" />*/}
                <News path="/news"/>
                <About path="/about/:source"/>
            </App>
        </Router>
    );
};

export { AppWithRoutes }