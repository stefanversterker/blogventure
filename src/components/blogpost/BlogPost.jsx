import './BlogPost.css'
/*import logo from './assets/logo-white.png'*/
/*import { Routes, Route } from 'react-router-dom';*/
import {Link, useParams} from "react-router-dom";
import posts from '/src/constants/data.json';

function BlogPost() {
    console.log(posts)

    const {postID} = useParams();

    return (

        <>
            {posts.map((c) => (
            <li key={c.id}>
                <article className="blogpost-container">
                    <div className="title-and-blogger">
                        <h5 className="blog-title">{c.title}</h5>
                        <h6 className="blogger-name">({c.author})</h6>
                    </div>
                    <h6 className="reactions-shared">{c.comments} reacties - {c.shares} keer gedeeld</h6>
                </article>
            </li>))}
        </>
    )
}

export default BlogPost;