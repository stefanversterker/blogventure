//Dit is het overzicht waarin alle artikelen komen te staan

import './Overview.css'
import BlogPost from "../../components/blogpost/BlogPost.jsx";
/*import logo from './assets/logo-white.png'*/
/*import { Routes, Route } from 'react-router-dom';*/
/*import posts from '/src/constants/data.json';*/

function Overview() {
    return (

        <div className="overview-window">
            <h1>Bekijk alle 17 posts op het platform</h1>
            <ul className="blogpost-list">
                <BlogPost/>
            </ul>
        </div>
    )
}

export default Overview