import React from "react";
import moment from 'moment';
import 'moment-timezone';
import Header from "./components/Header";
import LatestUpdates from "./components/LatestUpdates";
import Sidebar from "./components/Sidebar";
import TopStories from "./components/TopStories";
import Spotlight from "./components/Spotlight";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function App() {
  let [newsData, setNewsData] = React.useState();
  let [category, setCategory] = React.useState('general')
  let [search, setSearch] = React.useState('all')
  let date = moment().format().slice(0,10);


  React.useEffect(function() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&everything?q=${search}&from=${date}&sortBy=publishedAt&apiKey=2cdc65e1857244d7a07df481b27d0c42`

    )
      .then((res) => res.json())
      .then((data) => setNewsData(data.articles));
  }, [category]);
  console.log(newsData);

  function handleClick(e) {
    setCategory(e.target.textContent)
  }
  function handleSubmit(e){
    e.preventDefault()
    setSearch(e.target.value)
    e.target.value="";
  }

  return (
    <div className="main-container">
      <Header handleClick={handleClick} handleSubmit={handleSubmit} />
      {newsData && <LatestUpdates articles={newsData} />}
      <section className="top-stories-section">
        <h2 className="my-5 text-center w-100 section-heading">Top Stories</h2>
        <div className="top-stories">
          {newsData && <TopStories articles={newsData} />}
          {newsData && <Sidebar articles={newsData} />}
        </div>
      </section>
      {newsData && <Spotlight articles={newsData} />}
      {newsData && <Companies />}
      {newsData && <Footer />}
    </div>
  );
}

export default App;
