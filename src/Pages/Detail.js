import React, { useState, useEffect } from "react";
import "./Detail.style.css"
import axios from "axios";
import { useParams } from "react-router";
import Loadscreen from "../Reusables/Loadscreen";

function Detail() {

  const id = useParams().id;
  let [blog, setBlog] = useState(null);

  async function getData(url) {
    axios
      .get(url)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err, "Error"));
  }

  useEffect(() => {
    getData('http://localhost:3000/blogs?id='+id);
  }, [id]);

  return (   
    <div className="detail">
      {blog
        ? blog.map((blogData) => {
          return (
            <div key={blogData.id}>
              <h2>{blogData.title}</h2>
              <p>
                <small>
                  <cite> {blogData.author}</cite>
                </small>
              </p>
              <p>{blogData.paragraph}</p>
            </div>
          );
        })
        : <Loadscreen />}
    </div>
  );

}

export default Detail;
