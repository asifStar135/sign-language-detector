import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OverLay from "../components/OverLay";

import cvzone from "../assets/cvzone.jpeg";
import opencv from "../assets/opencv.jpg";
import yolo from "../assets/yolo.jpeg";

const Techs = [
  {
    id: 0,
    name: "React Js",
    tool: "Frontend",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    description:
      "React JS is a popular JavaScript library for building user interfaces, particularly single-page applications. It enables developers to create reusable UI components and manage the state of their applications efficiently.",
  },
  {
    id: 1,
    name: "TensorflowJs",
    tool: "Frontend",
    img: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F74f237af-c2d6-4784-8e7f-6c7ff0d65c01-ectn4b.png&w=3840&q=75",
    description:
      "TensorFlow.js is a JavaScript library for training and deploying machine learning models in the browser and on Node.js. It allows developers to build and run ML models directly in the browser, enabling real-time and interactive machine learning applications.",
  },
  {
    id: 2,
    name: "TailwindCSS",
    tool: "Frontend - UI",
    img: "https://smartastudio.b-cdn.net/wp-content/uploads/2024/02/tailwindcss-smartastudio.jpg",
    description:
      "It's a utility-first CSS framework that provides a collection of low-level utility classes for rapid UI development. It allows you to create custom designs without writing custom CSS, promoting a consistent and responsive design approach.",
  },
  {
    id: 3,
    name: "YOLOv5",
    tool: "Model Training",
    img: yolo,
    description:
      "YOLO (You Only Look Once) is a state-of-the-art, real-time object detection system known for its speed and accuracy. Unlike traditional detection systems that apply the model to an image at multiple locations and scales, YOLO predicts bounding boxes and class probabilities directly from full images in a single evaluation.",
  },
  {
    id: 4,
    name: "CVZONE",
    tool: "Data Collection",
    img: cvzone,
    description:
      "CVZone is a Python library that simplifies computer vision tasks by integrating OpenCV and other utilities. It provides easy-to-use functions for capturing and processing images, making it ideal for data collection. With CVZone, it's easy for image annotation, real-time video analysis, and dataset generation.",
  },
  {
    id: 5,
    name: "CV2 - OpenCV",
    tool: "Image Processing",
    img: opencv,
    description:
      "OpenCV (Open Source Computer Vision Library) is an open-source library for computer vision and image processing tasks. It includes a wide range of optimized algorithms for tasks such as filtering, color space conversion, motion detection, tracking, and object detection.",
  },
];

export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-12 lg:px-8">
      <OverLay />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Technologies Used
        </h2>
      </div>

      <div className="py-10 flex items-center justify-center gap-8 flex-wrap">
        {Techs?.length > 0 &&
          Techs?.map((tech) => (
            <div
              key={tech.id}
              className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl"
            >
              <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img src={tech.img} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="block font-sans text-lg font-semibold leading-relaxed text-primary-dark antialiased">
                    {tech.name}
                  </p>
                  <p className="block font-sans text-base font-medium leading-relaxed text-primary antialiased">
                    {">> " + tech.tool}
                  </p>
                </div>
                <p className="block font-sans text-justify text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
