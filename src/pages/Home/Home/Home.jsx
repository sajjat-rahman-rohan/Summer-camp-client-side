/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import HappyStudent from "../happyStudent/happyStudent";
// import Counter from "../Counter/Counter";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ola Conversa | Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <PopularClasses></PopularClasses>
      {/* <Counter></Counter> */}
      <PopularInstructors></PopularInstructors>
      <HappyStudent></HappyStudent>
    </div>
  );
};

export default Home;
