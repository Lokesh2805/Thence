import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SuccessStories from "./components/SuccessStories";
import FAQs from "./components/FAQs";
import { Fade } from "react-reveal";
function Home() {
  return (
    <div>
      <Fade>
        <Header />
      </Fade>
      <Fade>
        {" "}
        <SuccessStories />
      </Fade>
      <Fade>
        {" "}
        <FAQs />
      </Fade>
      <Fade>
        {" "}
        <Footer />
      </Fade>
    </div>
  );
}

export default Home;
