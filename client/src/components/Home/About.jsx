import "./About.css";
import { AboutBG } from "./AboutBG";

const About = () => {
  return (
    <div className="About--div pt-[50px]">
      <h1 className="About--title">Our Story</h1>
      <p className="About--p1">
        Our inspiration for Build-a-Book begins with the desire to converge
        <span className="font-bold"> education</span>,{" "}
        <span className="font-bold"> storytelling</span>, and{" "}
        <span className="font-bold"> creativity</span>. Drawing influence from
        the <span className="font-bold"> heartfelt</span> moments we’ve
        experienced with our parents as children, we opted to create software
        that would reduce the gap between{" "}
        <span className="font-bold"> technology</span> and{" "}
        <span className="font-bold"> human emotion</span>. We believe education
        and imagination should strongly{" "}
        <span className="font-bold"> intertwine</span>, to make learning a
        <span className="font-bold"> creative journey</span> for both kids and
        their parents. Build-A-Book’s objective is to continue to foster{" "}
        <span className="font-bold"> loving</span> moments amongst family, in a
        world of digital proficiency.
      </p>
      <p className="About--p2">
        Build-A-Book is to be used as an{" "}
        <span className="font-bold">educational platform</span>, putting the
        creative process in the hands of parents. Starting with a{" "}
        <span className="font-bold"> simple</span> and
        <span className="font-bold"> brief</span> prompt, our software can craft
        a <span className="font-bold"> personalized</span> and{" "}
        <span className="font-bold"> immersive</span> story for children.
        Parents will have an <span className="font-bold">original</span> tale to
        tell, paired with a digital book, full of unique and animated images.
        Build-a-Book <span className="font-bold"> blends</span> education and
        creativity, transforming learning into a{" "}
        <span className="font-bold"> comprehensive</span> experience for both
        parents and children.
      </p>
      <AboutBG />
    </div>
  );
};
export default About;
