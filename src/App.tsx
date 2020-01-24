import * as React from "react";
import styled from "styled-components";
import { FC } from "react";
import {
    Link,
    RouteComponentProps
} from "@reach/router";
import { News } from "./News";
import { About } from "./About";

interface IAppProps extends RouteComponentProps {
    name: string;
    path: string;
}

const MainWrapper = styled.div``;
const Greeting = styled.div``;
const Navigation = styled.div``;

const App: FC<IAppProps> = () => {
    return (
        <div>
            <MainWrapper>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="news">News</Link>
                    <Link to="/about/smth">About</Link>
                </Navigation>
            </MainWrapper>
        </div>
    )
};

/*const ExtraOptions = () => {
  return (
      <div>
          There is some information
      </div>
  )
};*/

const AppWithRoutes = (name: string) => {
    return (
        <App path = "/" name = "Kotik">
            <Greeting>
                Hello, {name}
            </Greeting>
            <News path="/news"/>
            <About path="/about/:source" />
        </App>
    );
};

export { AppWithRoutes }