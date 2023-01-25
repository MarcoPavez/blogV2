import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  /* const posts = [
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
      ]; */

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Otras publicaciones que te pueden interesar</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="Error al cargar imagen" />
          <h2>{post.title}</h2>
          <button>Leer más</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
