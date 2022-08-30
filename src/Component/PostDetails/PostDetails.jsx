import React from "react";
import { useParams } from "react-router";
import "./PostDetails.css";

import { useEffect, useState } from "react";

const PostDetails = () => {
  let { id } = useParams();

  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    fetch("https://vbcf-backend.techknowgram.com/api/posts/" + id)
      .then((response) => response.json())
      .then((data) => setSinglePost(data));
  }, []);

  return (
    <div>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-8">
            <div className="w-100">
              <img className="img-fluid w-100" src={singlePost.image} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <h1>{singlePost.title}</h1>
            <p>{singlePost.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
