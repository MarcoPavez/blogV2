import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment"
import { useContext } from "react";
import {AuthContext} from "../context/authContext.js"

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation()

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

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

  return (
    <div className="single">
      <div className="content">
        <img
          src={post?.img}
          alt=""
        />
        <div className="user">
          <img
            src="https://i.imgur.com/swzokWj_d.webp?maxwidth=520&shape=thumb&fidelity=high"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Publicado {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (<div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="/" alt="" />
            </Link>
            <img src="/" alt="" />
            
          </div>
          )}
        </div>
          
        <h1>
          {post.title}
        </h1>
       
          {post.desc}
       
      </div>
      <Menu />
    </div>
  );
};

export default Single;
