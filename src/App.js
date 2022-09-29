import { Parallax } from "react-parallax";
import city from "./assets/city.jpg";
import fly from "./assets/fly.jpg";
import woman from "./assets/woman.jpg";
import boat from "./assets/tania-miron-EKX3Lx-t5CM-unsplash.jpg"
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Parallax strength={300} bgImage={woman}>
        <div className="content">
          <div className="text-container">
            <div className="text-content">
              <h1>DEMOHEADER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                est purus, ultrices in porttitor in, accumsan non quam. Nam
                consectetur porttitor rhoncus. Curabitur eu est et leo feugiat
                auctor vel quis lorem. Ut et ligula dolor, sit amet consequat
                lorem. Aliquam porta eros sed velit imperdiet egestas. Maecenas
                tempus eros ut diam ullamcorper id dictum libero
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={city}>
        <div className="content">
          <div className="text-container">
            <div className="text-content">
              <h1>DEMOHEADER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                est purus, ultrices in porttitor in, accumsan non quam. Nam
                consectetur porttitor rhoncus. Curabitur eu est et leo feugiat
                auctor vel quis lorem. Ut et ligula dolor, sit amet consequat
                lorem. Aliquam porta eros sed velit imperdiet egestas. Maecenas
                tempus eros ut diam ullamcorper id dictum libero
              </p>
            </div>
          </div>
        </div>

      </Parallax>
      <Parallax strength={-300} blur={{ min: -15, max: 15 }} bgImage={boat}>
        <div className="content">
          <div className="text-container">
            <div className="text-content">
              <h1>DEMOHEADER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                est purus, ultrices in porttitor in, accumsan non quam. Nam
                consectetur porttitor rhoncus. Curabitur eu est et leo feugiat
                auctor vel quis lorem. Ut et ligula dolor, sit amet consequat
                lorem. Aliquam porta eros sed velit imperdiet egestas. Maecenas
                tempus eros ut diam ullamcorper id dictum libero
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-300} bgImage={fly}>
        <div className="content">
          <div className="text-container">
            <div className="text-content">
              <h1>DEMOHEADER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                est purus, ultrices in porttitor in, accumsan non quam. Nam
                consectetur porttitor rhoncus. Curabitur eu est et leo feugiat
                auctor vel quis lorem. Ut et ligula dolor, sit amet consequat
                lorem. Aliquam porta eros sed velit imperdiet egestas. Maecenas
                tempus eros ut diam ullamcorper id dictum libero
              </p>
            </div>
          </div>
        </div>
      </Parallax>

    </div>
  );
};

export default App;
