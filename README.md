# Real Time Sign Language Detection

## Overview

Sign Language Detection is a real-time hand gesture recognition system designed to bridge the communication gap for the hearing-impaired and non-verbal individuals. This project utilizes advanced machine learning techniques, specifically YOLOv5, to accurately identify and categorize hand gestures performed by users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Model Training](#model-training)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Introduction

This project aims to create a robust system for real-time sign language recognition. By leveraging deep learning models and sophisticated image processing methods, the system can accurately detect and interpret hand gestures, ensuring reliable communication support in various conditions.

## Features

- Real-time hand gesture recognition
- Accurate detection and classification of sign language gestures
- User-friendly interface with real-time feedback
- Audio output for detected gestures
- Robust against different backgrounds and lighting conditions

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/asifstar135/sign-language-detector.git
   cd sign-language-detection
   ```

2. **Install dependencies:**:
   ```bash
   npm install
   ```
3. **Run Application:**:
   ```bash
   npm start
   ```

## Usage

To set up the project locally, follow these steps:

1. Open your web browser and go to http://localhost:3000.

2. Allow the website to access your webcam.

3. Perform hand gestures in front of the camera.

4. The system will recognize the gesture and display the corresponding sign language word on the screen. Additionally, it
   will provide an audio output of the detected gesture.

## Model Training

The model was trained using the YOLOv5 algorithm. Here are the steps:

1. **Dataset Collection:**
   - Collected diverse images of hand gestures representing various sign language classes (e.g., "Hello", "Thanks", "Help").
   - Labeled the hand gestures using makesense.ai.
2. **Training Process:**

   - Cloned the YOLOv5 repository and set up the environment on Google Colab.
   - Uploaded the training dataset and created a custom configuration file.
   - Trained the model using the train.py script, adjusting parameters for optimal performance.
   - Downloaded the trained model for integration into the application.

3. **Technologies Used**
   - **YOLOv5**: For training the hand gesture recognition model.
   - **TensorFlow**.js: For deploying the trained model in the web application.
   - **ReactJS**: Frontend framework for building the user interface.
   - **react-webcam**: For capturing real-time video from the webcam.
   - **Tailwind CSS**: For styling the web application.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature-name).
6. Open a pull request.

## Acknowledgements

    - Special thanks to my project guide Dr. Sk Md Obaidullah sir for his invaluable support and guidance.
    - Thanks to the contributors of YOLOv5 and TensorFlow.js for providing excellent tools for machine learning and web development.
