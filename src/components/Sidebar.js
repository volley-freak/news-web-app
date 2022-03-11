import React from "react";
import SidebarNews from "./SidebarNews";

export default function (props) {
    let newsContainer=props.articles.map((item,key)=>{
        return key>7 && key<10 && <SidebarNews title={item.title} key={key} imgUrl={item.urlToImage} url={item.url}/>
    })
  return (
    <section className="sidebar-news">
      {newsContainer}
    </section>
  );
}
