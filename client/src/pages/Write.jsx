import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  const handleClick = async e => {
    e.preventDefault()
    const imgUrl = upload()

    try{

    }catch(err){
      console.log(err)
    }
  } 

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Título" onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          /> 
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Estado: </b> Borrador
          </span>
          <span>
            <b>Visibilidad: </b> Público
          </span>
          <input style={{ display: "none" }} type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label className="file" htmlFor="file">Sube tu imagen</label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoría</h1>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="art" onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor="art">Arte</label></div>
          <div className="cat">
          <input type="radio" name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor="art">Ciencia</label></div>
          <div className="cat">
          <input type="radio" name="cat" value="technology" id="technology" onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor="art">Tecnología</label></div>
          <div className="cat">
          <input type="radio" name="cat" value="cinema" id="cinema" onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor="art">Cine</label></div>
          <div className="cat">
          <input type="radio" name="cat" value="design" id="design" onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor="art">Diseño</label></div>
          <div className="cat">
          <input type="radio" name="cat" value="food" id="food" onChange={e=>setCat(e.target.value)}></input>
          <label htmlFor="art">Comida</label></div>
        </div>
      </div>
    </div>
  );
};

export default Write;
