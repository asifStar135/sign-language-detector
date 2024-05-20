import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OverLay from "../components/OverLay";

const Techs = [
  {
    id: 0,
    name: "React Js",
    tool: "Frontend",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 1,
    name: "Node Js",
    tool: "Frontend",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 2,
    name: "Next Js",
    tool: "Frontend",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 3,
    name: "Next Js",
    tool: "Frontend",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    id: 4,
    name: "Next Js",
    tool: "Frontend",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
];

export default function Example() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="isolate bg-white px-6 py-12 lg:px-8">
      <OverLay />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Technology Stack
        </h2>
      </div>

      <div className="py-10 flex items-center justify-center gap-8 flex-wrap">
        {Techs?.length > 0 &&
          Techs?.map((tech) => (
            <div
              key={tech.id}
              className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img src={tech.img} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="block font-sans text-base font-medium leading-relaxed text-primary-dark antialiased">
                    {tech.name}
                  </p>
                  <p className="block font-sans text-base font-medium leading-relaxed text-primary antialiased">
                    {tech.tool}
                  </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
