import OverLay from "../components/OverLay";
import { useRef, useState } from "react";
import TF from "../helper";
import loader from "../assets/loading.svg";
import hello from "../assets/hello.png";
import yes from "../assets/yes.png";
import no from "../assets/no.png";
import thanku from "../assets/thanku.png";
import okay from "../assets/okay.jpg";
import call from "../assets/call.png";
const voiceLink =
  "https://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg";
const muteLink = "https://static.thenounproject.com/png/2619102-200.png";

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

export default function Detection() {
  const [loading, setLoading] = useState(false);
  const [camera, setCamera] = useState(false);
  const [activeState, setActive] = useState(false);
  const active = useRef(false);
  const isVoice = useRef(true);
  const [voice, setVoice] = useState(true);
  const [result, setResult] = useState("");

  let model,
    webcam,
    maxPredictions,
    URL = process.env.REACT_APP_MODEL_LOCATION,
    app_url = process.env.REACT_APP_URL,
    count = 0;

  const init = async () => {
    setLoading(true);
    // model = await TF.load(modelURL, metadataURL);
    model = await TF.load(
      app_url + "model2/model.json",
      app_url + "model2/metadata.json"
    );
    // return;
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    let width = 550;
    let height = 400;
    if (window.innerWidth < 765) width = 300;
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    // return;
    webcam = new TF.Webcam(width, height, flip);
    await webcam.setup(); // request access to the webcam
    setCamera(webcam);
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    setLoading(false);
    setActive(true);
    active.current = true;
    webcam.play();
    window.requestAnimationFrame(loop);
  };

  async function loop() {
    if (active.current == false) return;
    webcam.update(); // update the webcam frame
    await predict();
    setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 100);
  }

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      if (window.speechSynthesis.speaking) {
        return;
      }

      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US"; // Set language to English

      // Speak the text
      window.speechSynthesis.speak(utterance);

      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event.error);
      };
    } else {
      console.error("Speech synthesis is not supported in this browser.");
    }
  };

  // run the webcam image through the image model
  async function predict() {
    count++;
    if (count % 5) return;
    // predict can take in an image, video or canvas html element
    let prediction;
    prediction = await model.predict(webcam.canvas);
    prediction.sort((a, b) => {
      return b.probability - a.probability;
    });

    // Threshold for detecting "No Hand"
    const threshold = 0.7;

    const newResult =
      prediction[0].probability < threshold
        ? "No Hand"
        : prediction[0].className;

    if (count == 20) {
      isVoice.current && newResult != "No Hand" && speak(newResult);
      count = 0;
    }
    setResult(newResult);
  }

  const stopCam = () => {
    setActive(false);
    active.current = false;
    document.getElementById("webcam-container").innerHTML = "";
    camera?.stop();
  };

  return (
    <div className="mb-20">
      <OverLay />
      <div
        className={`flex flex-col lg:flex-row ${
          active ? "mt-12 md:mt-20 " : "mt-25 md:mt-28 "
        } items-center justify-between mx-auto px-10 md:px-20`}
      >
        <div className="border-2 border-primary rounded-lg p-6 md:p-10 m-8 flex flex-col items-center justify-around w-[20rem] md:w-[40rem]">
          {loading && <img src={loader} />}
          {activeState == false && (
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
          <div
            id="webcam-container"
            className={activeState == false && "hidden"}
          ></div>
        </div>
        {activeState ? (
          <div className="flex flex-col items-center md:w-1/3 w-11/12 mb-20">
            <div
              onClick={() => {
                isVoice.current = !isVoice.current;
                setVoice(!voice);
              }}
              className={
                "flex items-center justify-between mb-10 w-44 px-3 py-2 rounded-full cursor-pointer border-2 border-primary " +
                (voice && "bg-primary")
              }
            >
              <p className="text-gray-800 text-lg font-semibold">Speak aloud</p>
              <img src={voice ? voiceLink : muteLink} className="h-8" />
            </div>
            <span className="text-xl text-primary">Detected Label : </span>
            <p className="p-5 rounded-lg m-3 font-semibold text-gray-800 text-2xl flex flex-col items-center">
              {result}
            </p>
            <button
              onClick={() => stopCam()}
              disabled={loading}
              className="rounded-md bg-primary px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Stop
            </button>
          </div>
        ) : (
          <Signs />
        )}
      </div>
      {activeState && <Signs />}
    </div>
  );
}

const Signs = () => {
  return (
    <div className="p-5 border-t-2 border-b-2 rounded-lg border-primary">
      <div>
        <h2 className="text-xl md:text-3xl text-center mb-5 text-gray-800 font-semibold">
          Recognisable Hand Gestures
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 justify-around">
        {signsList?.map((item) => (
          <div className="border-l-2 border-primary-dark pl-2">
            <img src={item?.image} className="h-16 md:h-36" />
            <h3 className="text-lg text-primary-dark text-center">
              {item?.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
