import OverLay from "../components/OverLay";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import { useState } from "react";
import loader from "../assets/loading.svg";
import hello from "../assets/hello.png";
import yes from "../assets/yes.png";
import no from "../assets/no.png";
import thanku from "../assets/thanku.png";
import okay from "../assets/okay.jpg";
import call from "../assets/call.png";

const signsList = [
  {
    image: hello,
    label: "Hello",
  },
  {
    image: yes,
    label: "Yes",
  },
  {
    image: no,
    label: "No",
  },
  {
    image: call,
    label: "Call",
  },
  {
    image: thanku,
    label: "Thank You",
  },
  {
    image: okay,
    label: "Okay",
  },
];

export default function Example() {
  const [loading, setLoading] = useState(false);
  const [camera, setCamera] = useState(false);
  const [active, setActive] = useState(false);
  const [result, setResult] = useState("");

  let voices = [];

  function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      console.log("recursion");
      setTimeout(loadVoices, 1000);
    } else {
      console.log("Available voices:", voices);
    }
  }

  let model,
    webcam,
    maxPredictions,
    URL = process.env.REACT_APP_MODEL_LOCATION;

  const init = async () => {
    setLoading(true);
    // speak("Asif Mondal You're a developer");
    // return;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    const width = 550;
    const height = 400;
    webcam = new tmImage.Webcam(width, height, flip);
    await webcam.setup(); // request access to the webcam
    setCamera(webcam);
    // document.getElementById("webcam-container").innerHTML = webcam.canvas;
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    setLoading(false);
    setActive(true);
    webcam.play();
    window.requestAnimationFrame(loop);
  };

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 100);
  }

  const speak = (text) => {
    // console.log(text);
    // Check if the browser supports the Web Speech API
    if ("speechSynthesis" in window) {
      // Check and log available voices
      // const voices = window.speechSynthesis.getVoices();
      console.log(voices);
      if (voices.length === 0) {
        console.error("No speech synthesis voices available.");
        // return;
      }

      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices[0]; // Use the first available voice
      utterance.lang = "en-US"; // Set language to English
      utterance.onerror = (event) => {
        console.error("SpeechSynthesisUtterance.onerror", event);
        console.log("Error occurred in speech synthesis: " + event.error);
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support the Web Speech API.");
    }
    // const synth = window.speechSynthesis;
    // const utterance = new SpeechSynthesisUtterance(text);
    // // synth.speak(utterance);
    // window.speechSynthesis.speak(utterance);
  };

  // run the webcam image through the image model
  async function predict() {
    // predict can take in an image, video or canvas html element
    let prediction;
    prediction = await model.predict(webcam.canvas);
    console.log(prediction);
    prediction.sort((a, b) => {
      return b.probability - a.probability;
    });

    // setResult(prediction[0].className);
    // Threshold for detecting "No Hand"
    const threshold = 0.7;
    // if (prediction[0].probability < threshold) {
    //   setResult("No Hand");
    // } else {
    //   setResult(prediction[0].className);
    // }

    const newResult =
      prediction[0].probability < threshold
        ? "No Hand"
        : prediction[0].className;

    console.log(newResult);

    if (newResult !== result) {
      setResult(newResult);
      speak(newResult);
    }
  }

  const stopCam = () => {
    setActive(false);
    document.getElementById("webcam-container").innerHTML = "";
    camera?.stop();
  };

  return (
    <div className="mb-20">
      <OverLay />
      <div
        className={`flex flex-col md:flex-row ${
          active ? "mt-12 md:mt-20 " : "mt-25 md:mt-28 "
        } items-center justify-around mx-auto`}
      >
        <div className="border-2 border-primary rounded-lg p-10 m-8 flex flex-col items-center justify-around w-[20rem] md:w-[40rem]">
          {loading && <img src={loader} />}
          {!active && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">
                Start the Camera to Detect
              </h2>
              <button
                disabled={loading}
                onClick={() => init()}
                className="rounded-md bg-primary my-10 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Camera
              </button>
            </div>
          )}
          <div id="webcam-container" className={!active && "hidden"}></div>
        </div>
        {active ? (
          <div className="flex flex-col items-center w-1/3">
            <p className="p-5 rounded-lg m-6 text-2xl flex flex-col items-center">
              <span className="text-xl text-primary">Detected Label : </span>
              {result}
            </p>
            <button
              onClick={() => stopCam()}
              disabled={loading}
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Stop
            </button>
          </div>
        ) : (
          <Signs />
        )}
      </div>
      {active && <Signs />}
    </div>
  );
}

const Signs = () => {
  return (
    <div className="p-5 px-10 border-t-2 border-b-2 rounded-lg border-primary">
      <div>
        <h2 className="text-3xl text-center mb-5 text-gray-800 font-semibold">
          Recognisable Hand Gestures
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-around">
        {signsList?.map((item) => (
          <div className="border-l-2 border-primary-dark pl-2">
            <img src={item?.image} className="h-36" />
            <h3 className="text-lg text-primary-dark text-center">
              {item?.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
