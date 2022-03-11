import React from "react";
// import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

export default function (props) {
  let styles = {
    newsImg: {
      position:"relative",
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

  let time = moment.utc(props.time).local().startOf('hours').fromNow()
  // console.log(props.url)

  return (
    <a className="news-container" href={props.url}>
      <div className="news-img" style={styles.newsImg}>
        <div className="bg-overlay" style={styles.bgOverlay}></div>
        <h5 className="news-title">{props.title}</h5>
      </div>
      <p className="description">{props.description}</p>
      <h5 className="author">By : <span className="author-name">{props.author}</span></h5>
      <h6 className="news-time">{time}</h6>
    </a>
  );
}
