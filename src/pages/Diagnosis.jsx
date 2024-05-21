import OverLay from "../components/OverLay";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import { act, useState } from "react";
import loader from "../loading.svg";
// import Predict from "./Predict";

export default function Example() {
  const [loading, setLoading] = useState(false);
  const [camera, setCamera] = useState(false);
  const [active, setActive] = useState(false);
  const [result, setResult] = useState("");

  let model,
    webcam,
    maxPredictions,
    // URL = "https://teachablemachine.withgoogle.com/models/-xoVxTYDg/";
    // URL = "https://teachablemachine.withgoogle.com/models/m5NSTkzLu/";
    URL = "https://teachablemachine.withgoogle.com/models/vT_9v3576/";

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    setLoading(true);

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    const width = 200;
    const height = 200;
    webcam = new tmImage.Webcam(width, height, flip);
    await webcam.setup(); // request access to the webcam
    setCamera(webcam);
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    setLoading(false);
    setActive(true);
    webcam.play();
    window.requestAnimationFrame(loop);
  };

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    let prediction;
    prediction = await model.predict(webcam.canvas);
    prediction.sort((a, b) => {
      return b.probability - a.probability;
    });

    setResult(prediction[0].className);
  }

  const stopCam = () => {
    setActive(false);
    document.getElementById("webcam-container").innerHTML = "";
    camera?.stop();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <OverLay />
      {loading && <img src={loader} />}
      <div className="w-4/5 sm:w-1/2 lg:w-5/12 mx-auto py-16">
        <div
          id="webcam-container"
          className="border-2 border-primary rounded-lg p-6 flex flex-col items-center"
        >
          {!active && (
            <button
              onClick={() => init()}
              className="rounded-md bg-primary my-10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Camera
            </button>
          )}
        </div>
      </div>

      {active && (
        <div className="flex flex-col items-center">
          <div className="border-2 border-primary rounded-lg p-6 flex flex-col items-center">
            {result}
          </div>
          <button
            onClick={() => stopCam()}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Stop
          </button>
        </div>
      )}
    </div>
  );
}
