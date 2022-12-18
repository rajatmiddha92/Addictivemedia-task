import "./main6.css";
import Main6Data from "./main6data";
const Main6 = () => {
  return (
    <>
      <section className="main6-container">
        <div className="red-line"></div>
        <div className="main6-part2-container">
          <Main6Data
            text="01"
            src={require("../../images/main6-1.png")}
            alt="main6-1"
            heading="Cement Industry"
          />
          <Main6Data
            text="02"
            src={require("../../images/main6-2.png")}
            alt="main6-2"
            heading="Mining/Mineral Processing"
          />
          <Main6Data
            text="03"
            src={require("../../images/main6-3.png")}
            alt="main6-3"
            heading="Rubber Industry"
          />
          <Main6Data
            text="04"
            src={require("../../images/main6-4.png")}
            alt="main6-4"
            heading="Sugar Industry"
          />
          <Main6Data
            text="05"
            src={require("../../images/main6-5.png")}
            alt="main6-5"
            heading="Fertilizer industry"
          />
          <Main6Data
            text="06"
            src={require("../../images/main6-6.png")}
            alt="main6-6"
            heading="Power industry"
          />
        </div>
      </section>
    </>
  );
};
export default Main6;
