import OverLay from "../components/OverLay";

const people = [
  {
    name: "Md Asif Mondal",
    role: "B.Tech CSE 4th Year, ALIAH UNIVERSITY",
    imageUrl: "/mohsin.jpeg",
  },
  {
    name: "Arish Ahamed",
    role: "B.Tech CSE 4th Year, ALIAH UNIVERSITY",
    imageUrl: "/asif.jpeg",
  },
  {
    name: "Palash Mondal",
    role: "B.Tech CSE 4th Year, ALIAH UNIVERSITY",
    imageUrl: "/alif.jpeg",
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
              Three of us are final year students of Aliah University, pursuing
              4-year B.Tech in Computer Science and Engineering major. This is
              our final year project on Disease Prediction System under the
              supervision of Prof. Abisekh sir. We have used a Robust Model for
              prediction scenarios and Developed an attractive UI for
              interaction with the model.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a team of three final year students. Developed a Disease
            Prediction System under the guidance of Prof. Abisekh Sir.
          </p>
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
