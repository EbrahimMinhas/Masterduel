import * as React from "react";
import './home.scss';
import Navbar from "components/navbar/navbar";
import ContentSection from "components/contentSection/contentSection";

const Home = () => {
  return <div className="home">
    <Navbar />
    <div className="page-body">
      <ContentSection />
    </div>
  </div>
}

export default Home;