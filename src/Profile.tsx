import { RouteComponentProps } from "@reach/router";
import React, {
    FC,
    useState
} from "react";
import styled from "styled-components";
import { IUserIdentity } from "./model/user";

type ProfileProps = RouteComponentProps & IUserIdentity;

const ProfileWrapper = styled.div``;



const Profile: FC<ProfileProps> = () => {
    const [user, setNameValue] = useState<IUserIdentity>({
        username: "",
    });
    const nameValueFill = (fieldName: string) => (e: React.SyntheticEvent<HTMLElement>): void => {
        setNameValue({
            ...user,
            [fieldName]: e.currentTarget,
        })
    };
    return (
        <>
            {/* tslint:disable-next-line:jsx-self-close */}
            <ProfileWrapper
                onLoad = {nameValueFill("username")}>
                213{user.username}
            </ProfileWrapper>
        </>
    )
};

export { Profile }