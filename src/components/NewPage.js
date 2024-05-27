
import Photo1 from "../assets/pic/s.jpg";
import Photo2 from "../assets/pic/r.jpg";
import Photo3 from "../assets/pic/p.jpg";
import Photo4 from "../assets/pic/t.jpg";

import Nav from './nav';
const people = [
  {
    name: 'Richa shrink',
    role: 'Dashboard Speicalist / Team Leader',
    imageUrl:Photo2,
  },
{
  name: 'Sandesh Jundhre',
  role: 'Developer',
  imageUrl:Photo1,

},
{
  name: 'Pranay Ughade',
  role: 'Designer ',
  imageUrl:Photo3,
},
{
  name: 'Tushar Nandanwar',
  role: 'Analyst',
  imageUrl:Photo4,
},

  // More people...
]

export default function NewPage() {
  return (
    <div>
    <Nav/>
    <div className="bg-white py-24 sm:py-32">

      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Our dynamic team consists of skilled developers, creative designers, and insightful dashboard specialists.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}
