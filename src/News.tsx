import { RouteComponentProps } from "@reach/router";
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { NewsItem } from "./components/NewsItem";
import { INewsItem } from "./model/news";

interface INewsResponce {
    status: number;
    data: INewsItem[];
    errorText?: string;
}

const NewsWrapper = styled.div``;

export const getNews = (): Promise<INewsResponce> => {
    return new Promise(
        resolve => {
            resolve({
                status: 200,
                data: fakeData,
            })
        })
};

const News: FC<RouteComponentProps > = () => {
    const [news, setNews] = useState<INewsItem[]>([]);
    useEffect(() => {
       getNews()
           .then(res => {
               setNews(res.data)
           })
           .catch(err => {
               // tslint:disable-next-line:no-console
               console.log("Houston, we have a problem", err);
           })
    }, []);
    return (
        <NewsWrapper>
            {news.map(item => (
                <NewsItem data={item} key={item.id} />
            ))}
        </NewsWrapper>
    )
};

export {News}


const fakeData = [
    {
        id: 1,
        title: "First Title",
        text: "Some text",
        link:
            "https://google.com",
        timestamp: new Date('01-15-2019'),
    },
    {
        id: 2,
        title: "Second Title",
        text: "Some text",
        link:
            "https://google.com",
        timestamp: new Date('01-15-2019'),
    },
    {
        id: 3,
        title: "Third Title",
        text: "Some text",
        link:
            "https://google.com",
        timestamp: new Date('01-15-2019'),
    },
    {
        id: 4,
        title: "Fourth Title",
        text: "Some text",
        link:
            "https://google.com",
        timestamp: new Date('01-15-2019'),
    },
    {
        id: 5,
        title: "Fifth Title",
        text: "Some text",
        link:
            "https://google.com",
        timestamp: new Date('01-15-2019'),
    }
];

