import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import ImageWelcome from "./About-imgs/welcome.png";
import ImageHotelbooking from "./About-imgs/hotelbooking.png";
import PalaceCard from "../../components/PalaceCard/PalaceCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Footer from "../../components/Footer/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <>
      <Navbar />
      <div><p className="heading">About us</p></div>

      <div className="container-about-main">
        <div className="container-about">
          <p className="text-about">5 STAR HOTEL IN DUBAI, UAE</p>
          <p className="heading-about">Welcome To The <br /> Hotel Royel
            Palace</p>
          <p className="text1-about">The Gage Hotel Offers Unforgettable Food And Drink Options. Enjoy Dinner At <br />The Award-Winning</p>
          <img className="img-welcome" src={ImageWelcome} alt="welcome" />
        </div>

        <div className="container-about">
          <img className="img-hotelbooking" src={ImageHotelbooking} alt="hotelbooking" />
        </div>
      </div>

      <div className="container-about">
        <p className="text-about">THE ROYEL PALACE AWARDS</p>

        <p className="heading-about">The Royel Palace Recognition</p>

      </div>
      <div className="palacecard">
        <PalaceCard image={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.fd366d9f.png&w=256&q=75"} title={"Editor Choice For Best Hotel Brand For Services"} year={"2020"} />
        <PalaceCard image={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.f20e389b.png&w=128&q=75"} title={"Best Hotel Brand In The World (Ranked 1st)"} year={"2021"} />
        <PalaceCard image={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.1d3a36bf.png&w=256&q=75"} title={"Best City Hotel In The Asia (Ranked 1st)"} year={"2022"} />
      </div>

      <div  className="container-quotes">
       <p className="about-quotes"><br />
        <i class="fa-solid fa-quote-left"></i>
             <br/><br/>
          The Best Hotel I’ve Ever Been Privileged Enough To Stay <br /> At. Gorgeous Building, And It Only Gets More Breath <br/>Taking.
          <br/><br/>
          <i class="fa-solid fa-quote-right"></i>
        </p>

        <p className="quoteswriter">John Wick <span>(Product Designner)</span></p>
    
      </div>

      <div className="container-about">
        <p className="text-about">SPECIAL FEATURES & FACILITIES</p>

        <p className="heading-about">Explore Special Services And <br/>Facilities List</p>

      </div>

      <div className="servicecard">
        <ServiceCard  image={"https://www.vassallogroupmalta.com/wp-content/uploads/2017/10/Blog-4-Duties-To-be-Expected-from-Room-Service-PART-1-002.jpg"} title={"Room Services"} price={"$256"}/>
        <ServiceCard  image={"https://www.vassallogroupmalta.com/wp-content/uploads/2017/10/Blog-4-Duties-To-be-Expected-from-Room-Service-PART-1-002.jpg"} title={"Editor Choice For Best Hotel Brand For Services"} price={"2020"}/>
        <ServiceCard  image={"https://www.vassallogroupmalta.com/wp-content/uploads/2017/10/Blog-4-Duties-To-be-Expected-from-Room-Service-PART-1-002.jpg"} title={"Editor Choice For Best Hotel Brand For Services"} price={"2020"}/>
        <ServiceCard  image={"https://www.vassallogroupmalta.com/wp-content/uploads/2017/10/Blog-4-Duties-To-be-Expected-from-Room-Service-PART-1-002.jpg"} title={"Editor Choice For Best Hotel Brand For Services"} price={"2020"}/>
      </div>

    
      <Footer/>
    </>
  );
}
