import * as React from "react";
import styled from "styled-components";
import { FC } from "react";
import {
    Link,
    RouteComponentProps
} from "@reach/router";
import { News } from "./News";

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
                </Navigation>
                <Greeting>
                    Hello, {name}
                </Greeting>
                ...children
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

const AppWithRoutes = () => {
    return (
        <App path = "/" name = "Kotik">
            <News path="/news"/>
        </App>
    );
};

export { AppWithRoutes }