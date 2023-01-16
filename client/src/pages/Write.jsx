import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Título" />
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
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">Sube tu imagen</label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button>Actualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoría</h1>
          <input type="radio" name="cat" value="art" id="art"></input>
          <label htmlFor="art">Arte</label>
          <input type="radio" name="cat" value="science" id="science"></input>
          <label htmlFor="art">Ciencia</label>
          <input
            type="radio"
            name="cat"
            value="technology"
            id="technology"
          ></input>
          <label htmlFor="art">Tecnología</label>
          <input type="radio" name="cat" value="cinema" id="cinema"></input>
          <label htmlFor="art">Cine</label>
          <input type="radio" name="cat" value="design" id="design"></input>
          <label htmlFor="art">Diseño</label>
          <input type="radio" name="cat" value="food" id="food"></input>
          <label htmlFor="art">Comida</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
