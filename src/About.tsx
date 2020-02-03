import { RouteComponentProps } from "@reach/router"
import React from "react";

interface IAboutProps extends RouteComponentProps {
    source?: string;
}

const About: React.FC<IAboutProps> = () => {
    return (
      <div className="about">
        <p>Страница библиотеки треков</p>
        {/*<p>{props.source}</p>*/}
      </div>
    )
};
  
export { About }