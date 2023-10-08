import { watch } from "../Assets/index";
import "./Hero.scss";

const Hero = () => {
  return (
    <main className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-9 colum-1">
            <h1>Select Your New Perfect Style </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              repudiandae soluta et blanditiis nam ab nulla. Exercitationem nam
              quae labore?
            </p>
            <button type="button" className="btn btn-primary">
              Shop Now
            </button>
          </div>
          <div className="col-md-3 colum-2">
            <img src={watch} className="img-fluid rounded-top" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
