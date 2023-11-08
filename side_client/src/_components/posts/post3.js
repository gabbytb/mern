import React from "react";
import { Link } from "react-router-dom";
import postImg from "./placeholder.png";
import "./posts.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Post3() {

    return (
        <>
        <div className="card">
            <img className="card-img-top" src={postImg} alt="placeholder" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
        </>
    )
}