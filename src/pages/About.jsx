import OverLay from "../components/OverLay";
import asif from "../assets/me2.jpeg";
import arish from "../assets/arish.jpeg";
import palash from "../assets/palash.jpeg";

const people = [
  {
    name: "Md Asif Mondal",
    role: "B.Tech CSE204039, ALIAH UNIVERSITY",
    imageUrl: asif,
  },
  {
    name: "Arish Ahmed",
    role: "B.Tech CSE204040, ALIAH UNIVERSITY",
    imageUrl: arish,
  },
  {
    name: "Palash Sarkar",
    role: "B.Tech CSE213002, ALIAH UNIVERSITY",
    imageUrl: palash,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-4">
      <div className="isolate px-6 pt-8 lg:px-8">
        <OverLay />
        <div className="mx-auto max-w-2xl py-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Who are we ?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We, a dedicated team of three students developed this application
              under the expert supervision of{" "}
              <strong className="text-primary">Dr. Sk Md Obaidullah. </strong>
              This innovative project aims to bridge the communication gap
              between sign language users and the broader community by utilizing{" "}
              <strong className="text-primary">
                advanced machine learning and computer vision techniques.{" "}
              </strong>
              Our collective skills and determination have driven us to create a
              system that can accurately detect and translate sign language
              gestures into text or speech, promoting inclusivity and
              accessibility. <br />
              <strong className="text-primary">Thank You !</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary-dark">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
