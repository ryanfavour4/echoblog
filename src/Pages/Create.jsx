import React, { useState } from "react";
import axios from "axios";
import "./Create.style.css";

const Create = () => {
  const [author, setAuthor] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [title, setTitle] = useState("");

  const postObj = {
    author,
    title,
    paragraph,
  };

  async function postBlog(url) {
    axios
      .post(url, postObj)
      .then((res) => {
        alert("success");
        setAuthor("");
        setParagraph("");
        setTitle("");
      })
      .catch((err) => {
        alert("Failed");
      });
  }

  function sendBlog(e) {
    e.preventDefault();
    postBlog("http://localhost:3000/blogs");
  }

  return (
    <div className="create-container">
      <form onSubmit={sendBlog} className="box_wrap">
        <div className="title_box">
          <div className="title_single">
            <label>Title</label>
            <input
              className="box_input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
            />
          </div>
          <div className="title_single">
            <label>Author</label>
            <input
              className="box_input"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
        <div className="article">
          <label>Article</label>
          <textarea
            value={paragraph}
            onChange={(e) => {
              setParagraph(e.target.value);
            }}
            className="text_area"
            rows="5"
            cols="50"
            name="comment"
            form="usrform">
            Enter text here...
          </textarea>
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
