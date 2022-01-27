import "./intro.css";
import fish from "../../img/fish.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome to Robotic Fish Research Arena</h2>
          <h1 className="i-name">Optimization of Multibody Fish bot using</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">PSO Algorithms</div>
              <div className="i-title-item">Taguchi Method</div>
              <div className="i-title-item">Oscillation</div>
              <div className="i-title-item">Experimental Evolution</div>
              {/* <div className="i-title-item">Content Creator</div> */}
            </div>
          </div>
          <p className="i-desc">
            We started our Research on this Robotic fish for implementing various unknown sides in the industry.
          </p>
        </div>
       
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={fish} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
