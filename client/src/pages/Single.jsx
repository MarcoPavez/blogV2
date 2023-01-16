import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://i.imgur.com/swzokWj_d.webp?maxwidth=520&shape=thumb&fidelity=high"
          alt=""
        />
        <div className="user">
          <img
            src="https://i.imgur.com/swzokWj_d.webp?maxwidth=520&shape=thumb&fidelity=high"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Publicado hace 2 días</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src="/" alt=""/>
            </Link>
            <img src="/" alt=""/>
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quae, quo autem labore odio nemo consectetur aspernatur! Architecto deserunt enim corrupti, porro asperiores sit facere iusto iure non quod maiores!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem, itaque voluptas repellat quos quas ratione mollitia expedita maiores veritatis ab dicta perferendis vero libero quo voluptate sint eius odit.</p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
