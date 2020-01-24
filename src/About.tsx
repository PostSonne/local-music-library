import { RouteComponentProps } from "@reach/router"

interface IAboutProps extends RouteComponentProps {
    source?: string;
}

const About: React.FC<IAboutProps> = ({
    source
}) => {
    return (
      <div className="about">
        <p>Страница about</p>
        <p>{source}</p>
      </div>
    )
  }
  
  export { About }