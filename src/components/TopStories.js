import React from "react";
import TopStoriesNews from "./TopStoriesNews";

export default function(props) {
  let newsContainer = props.articles.map((item, key) => {
    return (
      key > 3 && key<8 && (
        <TopStoriesNews
          title={item.title}
          description={item.description}
          key={key}
          imgUrl={item.urlToImage}
          author={item.author}
          time={item.publishedAt}
          url={item.url}
        />
      )
    );
  });
  return (<section className="top-stories-news">
    
    {newsContainer}</section>);
}
