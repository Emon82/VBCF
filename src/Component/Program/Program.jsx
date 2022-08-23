import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Program.css";

export default function Program() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.147:8000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <div className="container py-5">
        <div class="row gy-3 justify-content-center">
          <div className="col-md-7">
            <div class="card post-card">
              <div class="card-body">
                <div className="card-title">
                  <h2>Programs</h2>
                </div>
              </div>
            </div>
          </div>
          {posts && posts.length ? (
            posts.map((post) => (
              <div className="col-md-7">
                <div class="card post-card">
                  <div class="card-header">
                    <Link to={"/postDetails/" + post.id}>{post.title}</Link>
                  </div>
                  <div class="card-body">
                    <div className="card-title">{post.content}</div>
                    <Link to={"/postDetails/" + post.id}>
                      <img
                        // style={{ width: "100%", height: "450px" }}
                        className="img-fluid w-100"
                        src={post.image}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div class="card-footer text-muted mt-5">
                    Date: {post.updated_at.split("T")[0]}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>Loding </h1>
          )}
        </div>
      </div>
    </div>
  );
}
