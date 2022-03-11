import React from "react";
import News from "./News";
  
export default function(props) {
  let newsContainer = props.articles.map((item, key) => {
    return (
      key < 3 && (
        <News
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
    <section className="latest-updates-section">
      <h2 className="my-5 text-center section-heading">Latest Updates</h2>
      <div className="latest-updates">{newsContainer}</div>
    </section>
  );
}
