import Card from "./card";
import "./card.css";
const Cards = () => {
  return (
    <>
      <div className="card-container">
        <Card
          text="Best Of The Best Industry Experts"
          src={require("../../images/pexels-werner-pfennig-6949931 1.png")}
          alt="werner"
        />
        <Card
          text="Vast Procurement Network"
          src={require("../../images/pexels-frans-van-heerden-2881632 1.png")}
          alt="kateryna"
        />
        <Card
          text="Latest Technology For Analysis"
          src={require("../../images/pexels-thisisengineering-3862632 1.png")}
          alt="thisengineering"
        />
        <img className="card-last-img"
          src={require("../../images//pexels-anamul-rezwan-1145434 1.png")}
          alt="anamul"
        />
      </div>
    </>
  );
};
export default Cards;
