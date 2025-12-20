import './BlogPage.css'
import {Link, useParams} from "react-router-dom";
/*import logo from './assets/logo-white.png'*/
/*import { Routes, Route } from 'react-router-dom';*/
import posts from '/src/constants/data.json';
import {useState} from "react";
import dateFormatter from '/src/helpers/dateFormatter.js'

function BlogPage() {

    const [blogTitle, setBlogTitle] = useState('')
    const [blogAuthor, setBlogAuthor] = useState('')
    const [blogCreated, setBlogCreated] = useState(0)
    const [blogTime, setBlogTime] = useState(0)
    const [blogContent, setBlogContent] = useState('')
    const [blogComments, setBlogComments] = useState(0)
    const [blogShares, setBlogShares] = useState(0)


    const {postID} = useParams()

    function fetchBlogPost() {
        const response = posts.find((b) => {
            return b.id.toString() === postID
        })
        console.log(response)

        setBlogTitle(response.title);
        setBlogAuthor(response.author);
        setBlogCreated(response.created);
        setBlogTime(response.readTime);
        setBlogContent(response.content);
        setBlogComments(response.comments);
        setBlogShares(response.shares);



    }


    return (

        <article className="blogpage">
            <button onClick={fetchBlogPost} type="button">Fetch blog post</button>
            <h1>{blogTitle}</h1>
            <h4></h4>
            <p>Geschreven door {blogAuthor} op {dateFormatter(blogCreated)}</p>
            <p>{blogTime} minuten lezen</p>
            <p>{blogContent}</p>
            <p>{blogComments} reacties - {blogShares} keer gedeeld</p>
            <h4><Link to="/overview">Terug naar de overzichtspagina</Link></h4>
        </article>
    )
}

export default BlogPage;