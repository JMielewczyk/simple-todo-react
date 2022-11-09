import React from "react";
import "../styles/StartPage.css";

const StartPage = () => {
  return (
    <div className="startPage">
      <h1>Dzień dobry? Oto lista nowości!</h1>
      <article className="startPage__article">
        <p className="article-title">Czym jest teoria strun?</p>
        <p className="article-author">Jan Nowak</p>
        <p className="article-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis
          nulla enim beatae, maxime laudantium. Debitis, quibusdam? Provident
          sit eligendi accusantium laudantium. Ducimus sed minus magnam, alias
          ullam totam fuga.
        </p>
      </article>
      <article className="startPage__article">
        <p className="article-title">Czym jest paradoks Fermiego?</p>
        <p className="article-author">Jan Nowak</p>
        <p className="article-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis
          nulla enim beatae, maxime laudantium. Debitis, quibusdam? Provident
          sit eligendi accusantium laudantium. Ducimus sed minus magnam, alias
          ullam totam fuga.
        </p>
      </article>
      <article className="startPage__article">
        <p className="article-title">Ciemna materia i ciemna energia?</p>
        <p className="article-author">Jan Nowak</p>
        <p className="article-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae omnis
          nulla enim beatae, maxime laudantium. Debitis, quibusdam? Provident
          sit eligendi accusantium laudantium. Ducimus sed minus magnam, alias
          ullam totam fuga.
        </p>
      </article>
    </div>
  );
};

export default StartPage;
