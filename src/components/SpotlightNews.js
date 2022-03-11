import React from "react";
import moment from "moment";
import "moment-timezone";
// import Sidebar from "./Sidebar";

export default function(props) {
  let styles = {
    newsImg: {
      //   position: "relative",
      backgroundImage: `url(${props.imgUrl})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      //   opacity:'0.8'
    },
  };

  let time = moment.utc(props.time).local().startOf('hours').fromNow()

  return (
    <a className="news-container" href={props.url}>
      <div className="news-img-container">
        <div className="news-img" style={styles.newsImg}></div>
        <div className="bg-overlay" style={styles.bgOverlay}></div>
      </div>
      <div className="s-news-info">
        <h5 className="s-news-title">{props.title}</h5>
        <p className="description">{props.description}</p>
        <div className="author-time">
        <h5 className="author">By : <span className="author-name">{props.author}</span></h5>
          <h6 className="news-time">{time}</h6>
        </div>
      </div>
    </a>
  );
}
