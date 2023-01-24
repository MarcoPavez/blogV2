import React, { useEffect, useState, useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import editarIcono from "../img/editarIcono.jpg"
import eliminarIcono from "../img/eliminarIcono.jpg"

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      Navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          <img
            src="https://i.imgur.com/swzokWj_d.webp?maxwidth=520&shape=thumb&fidelity=high"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Publicado {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={editarIcono} alt="" />
              </Link>
              <img onClick={handleDelete} src={eliminarIcono} alt="" />
            </div>
          )}
        </div>

        <h1>{post.title}</h1>

        {post.desc}
      </div>
      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single;
