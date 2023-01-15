import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "AAA",
      desc: "asdjasj",
      img: "https://i.imgur.com/swzokWj_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },
    {
      id: 2,
      title: "BBB",
      desc: "asdjasj",
      img: "https://i.imgur.com/HxwP1bW_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },
    {
      id: 3,
      title: "CCC",
      desc: "asdjasj",
      img: "https://i.imgur.com/FQStsYR_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },
    {
      id: 4,
      title: "DDD",
      desc: "asdjasj",
      img: "https://i.imgur.com/l5p0pZi_d.webp?maxwidth=520&shape=thumb&fidelity=high",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="..." />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Leer más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
