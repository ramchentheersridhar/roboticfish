import "./about.css";
import Award from "../../img/award.png";
import pso from "../../img/pso.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={pso}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">PSO Algorithm</h1>
        <p className="a-sub">
        PSO is a stochastic optimization technique based on the movement and intelligence of swarms.
        </p>
        <p className="a-desc">
        It uses a number of particles (agents) that constitute a swarm moving around in the search space, looking for the best solution.
        Each particle in the swarm looks for its positional coordinates in the solution space, which are associated with the best solution that has been achieved so far by that particle. It is known as pbest or personal best.
        </p>
      </div>
      
    </div>
  );
};

export default About;
