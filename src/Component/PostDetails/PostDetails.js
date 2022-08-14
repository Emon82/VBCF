import React from 'react';
import { useParams } from 'react-router';
import './PostDetails.css'

import { useEffect, useState } from "react";

const PostDetails = () => {

    let { id }= useParams();

    const [singlePost, setSinglePost] = useState({});

    useEffect(() => {
        fetch('http://192.168.0.147:8000/api/posts/'+id)
            .then((response) => response.json())
            .then((data) => setSinglePost(data));
    }, []);

    return (
        <div>
            <div className="container">
                <div className="item">
            <img src={singlePost.image} alt="" />
            <h1>{singlePost.title}</h1>
            <p>{singlePost.content}</p>
            </div>
            </div>
        </div>
    );
}

export default PostDetails;
