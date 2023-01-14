import React from "react";
import "./ListvideoPart.css";

const videoo = [
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },

  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/dSarn49JYQo",
    title: "React : Chapitre 4 Notre premier composant",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/AkEtv7J4kA8",
    title: "React : Chapitre 5 Les évènements",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/V8G0ILBE-Ok",
    title: "React : Chapitre 2 Nos premiers pas avec React  ",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/SFFZ0hpIk5Q",
    title: "React : Chapitre 3 La syntaxe JSX ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/dSarn49JYQo",
    title: "React : Chapitre 4 Notre premier composant",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/AkEtv7J4kA8",
    title: "React : Chapitre 5 Les évènements",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/V8G0ILBE-Ok",
    title: "React : Chapitre 2 Nos premiers pas avec React  ",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/SFFZ0hpIk5Q",
    title: "React : Chapitre 3 La syntaxe JSX ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/dSarn49JYQo",
    title: "React : Chapitre 4 Notre premier composant",
  },

  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
];

const ListvideoPart = () => {
  return (
    <div
      className="videoscontainer"
      style={{ width: 350, marginLeft: 30, marginTop: 50 }}
    >
      {videoo.map((el) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="littlevid"
          key={el.id}
        >
          <iframe
            title="listevid"
            src={el.vid}
            frameborder="0"
            style={{ width: 200, height: 100, margin: 5 }}
          ></iframe>
          <h4
            style={{
              color: "Black",
              textDecoration: "none",
              fontSize: 14,
              width: 150,
              margin: 5,
            }}
          >
            {el.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ListvideoPart;
