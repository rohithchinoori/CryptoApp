import "./index.css";
import SideBar from "../SideBar";

const About = () => (
  <div className="home-bg">
    <SideBar />
    <div className="about-card">
      <h1 className="head-a">This about Crypto_Blok</h1>
      <p className="p-about">
        At Crypto_Blok, we're passionate about empowering individuals with the
        knowledge and tools they need to navigate the dynamic world of
        cryptocurrency. Founded by a team of dedicated experts with years of
        experience in blockchain technology and finance, our platform serves as
        a beacon of trust and reliability in the crypto space
      </p>
      <h1 className="head">Our Mission</h1>
      <div className="about-ul">
        <p className="p">
          Educational Resources: Whether you're a seasoned crypto enthusiast or
          just starting your journey,
        </p>
        <p className="p">
          User-Friendly Tools: Our platform features intuitive tools and
          interfaces designed to simplify the process of buying, selling, and
          managing cryptocurrencies.
        </p>
        <p className="p">
          Expert Insights: Stay ahead of the curve with expert insights and
          analysis from our team of experienced professionals.
        </p>
      </div>
    </div>
  </div>
);
export default About;
