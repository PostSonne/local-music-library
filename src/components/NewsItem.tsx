import React, { FC } from "react";
import styled from "styled-components";
import { INewsItem } from "../model/news";

/*type NewsItem = Partial<INewsItem> & {
    data: INewsItem
}*/

interface INewsItemProps {
    data: INewsItem;
}
const NewsItemWrapper = styled.div``;

const NewsItem: FC<INewsItemProps> = ({
    data: {title, text, link},
}) => {
    return (
        <NewsItemWrapper>
            <a href={link}>
                {title}
            </a>
            <div>{text}</div>
        </NewsItemWrapper>
    )
};

export {NewsItem}

