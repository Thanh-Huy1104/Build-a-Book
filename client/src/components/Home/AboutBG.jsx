import Globe from "../../assets/globe.png";
import Books from "../../assets/books.png";
import Loupe from "../../assets/loupe.png";
import Bubble from "../../assets/message_bubbly.png";
import Penbox from "../../assets/pen_box.png";
import Pen from "../../assets/pen.png";
import Squiggle1 from "../../assets/spinny_thingy.png";
import Squiggle2 from "../../assets/spinny_thingy_2.png";
import Squiggle3 from "../../assets/spinny_thingy_3_red.png";
import Star from "../../assets/star.png";
import ThreeStar from "../../assets/stars_three.png";

export const AboutBG = () => {
  return (
    <div className="about_doodles">
      <img src={Globe} alt="" className="doodle about_globe" />
      <img src={Books} alt="" className="doodle about_books" />
      <img src={Loupe} alt="" className="doodle about_loupe" />
      <img src={Bubble} alt="" className="doodle about_bubble" />
      <img src={Penbox} alt="" className="doodle about_penbox" />
      <img src={Pen} alt="" className="doodle about_pen" />
      <img src={Squiggle1} alt="" className="doodle about_squiggle1" />
      <img src={Squiggle2} alt="" className="doodle about_squiggle2" />
      <img src={Squiggle3} alt="" className="doodle about_squiggle3" />
      <img src={Star} alt="" className="doodle about_star" />
      <img src={ThreeStar} alt="" className="doodle about_three_stars" />
    </div>
  );
};
