import React from "react";
import SpotlightNews from "./SpotlightNews";

export default function(props) {
  let newsContainer = props.articles.map((item, key) => {
    return (
      key > 9 &&
      key < 14 && (
        <SpotlightNews
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
  return (
    
    <section className="spotlight-news">
      <h2 className="my-5 text-center w-100 section-heading">Spotlight</h2>
      {newsContainer}
    </section>
  );
}
