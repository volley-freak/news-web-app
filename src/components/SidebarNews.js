import React from "react";
// import Sidebar from "./Sidebar";

export default function(props) {
  let styles = {
    newsImg: {
      position: "relative",
      backgroundImage: `url(${props.imgUrl})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      //   opacity:'0.8'
    },

    bgOverlay: {
      height: "100%",
      width: "100%",
    },
  };

  return (
    <div className="news-container">
      <div className="news-img" style={styles.newsImg}>
        <div className="bg-overlay" style={styles.bgOverlay}></div>
        <h5 className="news-title">{props.title}</h5>
      </div>
    </div>
  );
}
