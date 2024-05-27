import React from "react";
import Photo1 from "../assets/pic/photo1.jpeg";
import Photo2 from "../assets/pic/images 2jpg.jpg";
import Photo3 from "../assets/pic/photo3.jpg";
import Photo4 from "../assets/pic/photo4.jpeg";
import Photo from "../assets/pic/images.jpg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "COVID-19 Vaccination Progress in India ",
    desc: "",
    descc: "https://app.powerbi.com/view?r=eyJrIjoiNjhhZDU4MzItMzNmNS00NmE0LTgzZmQtZGI1MTk2ZjRlNTdjIiwidCI6Ijg0YzMxY2EwLWFjM2ItNGVhZS1hZDExLTUxOWQ4MDIzM2U2ZiIsImMiOjZ9",

  },
  {
    id: 2,
    img: Photo2,
    title: "Rashtriya Kishor Swasthya Karyakram (RKSK)",
    desc:"" ,
      descc: "https://app.powerbi.com/view?r=eyJrIjoiZDIzODFjMjktOThlYS00Nzc4LTg2NWYtYmVhNTU2NDY3NTkyIiwidCI6Ijg0YzMxY2EwLWFjM2ItNGVhZS1hZDExLTUxOWQ4MDIzM2U2ZiIsImMiOjZ9",

  },
  {
    id: 3,
    img: Photo3,
    title: "Aatmanirbhar Bharat Rojgar Yojana (ABRY)",
    desc:"" ,
      descc: "https://app.powerbi.com/view?r=eyJrIjoiYWQ1NmExMTUtNmVmNy00ZjZkLTg0ZjEtMGM3NWNhMmNiZTlhIiwidCI6Ijg0YzMxY2EwLWFjM2ItNGVhZS1hZDExLTUxOWQ4MDIzM2U2ZiIsImMiOjZ9",

  },
  {
    id: 4,
    img: Photo4,
    title: "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
    desc: "",
      descc: "https://app.powerbi.com/view?r=eyJrIjoiNjhhZDU4MzItMzNmNS00NmE0LTgzZmQtZGI1MTk2ZjRlNTdjIiwidCI6Ijg0YzMxY2EwLWFjM2ItNGVhZS1hZDExLTUxOWQ4MDIzM2U2ZiIsImMiOjZ9",

  },
  {
    id: 5,
    img: Photo,
    title: "COMMING SOON",
    desc: "Watting",
      descc: "Loading",

  },
];
const AnimatedCard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0">
        Responsive Animated Card
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc ,descc}) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}

                    </Fade>
                    <div>
                      <a href={descc}>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                      GO
                      </button></a>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCard;
