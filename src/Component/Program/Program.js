import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Program.css';

export default function Program() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.147:8000/api/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <div>
            <div className="container">
                <div class="row" style={{ marginTop: "20px" }}>

                    {(posts && posts.length) ? posts.map(post => (
                        <div className="col-md-6">
                            <div class="card" style={{ margin: "20px", width: "100%", height: "520px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px" }}>
                                <div class="card-body">
                                    <div className="box">
                                        <Link to={"/postDetails/" + post.id}>
                                            < img style={{ width: "100%", height: "450px" }} src={post.image} alt="" />
                                        </Link>
                                        <Link to={"/postDetails/" + post.id}>{post.title}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )):(
                        <h1>Loding </h1>
                    )}
                </div>


            </div>

        </div>
    )
}
