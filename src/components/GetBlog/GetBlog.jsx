//Dit component haalt een compleet blog-artikel op en rendert het

import './GetBlog.css';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import dateFormatter from '/src/helpers/dateFormatter.js';
import BlogContent from "../../components/BlogContent/BlogContent.jsx";

function GetBlog(id) {

    const [blogTitle, setBlogTitle] = useState('');
    const [blogSubTitle, setBlogSubTitle] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [blogCreated, setBlogCreated] = useState(0);
    const [blogTime, setBlogTime] = useState(0);
    const [blogContent, setBlogContent] = useState('');
    const [blogComments, setBlogComments] = useState(0);
    const [blogShares, setBlogShares] = useState(0);
    const [data, setData] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const {postID} = useParams()

    async function fetchBlogArticle() {

        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d'
                },
            })

            setData(response.data);
            setBlogTitle(response.data.title);
            setBlogSubTitle(response.data.subtitle);
            setBlogAuthor(response.data.author);
            setBlogCreated(response.data.created);
            setBlogTime(response.data.readTime);
            setBlogContent(response.data.content);
            setBlogComments(response.data.comments);
            setBlogShares(response.data.shares);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void fetchBlogArticle();
    }, [])


    return (

        <section className="blogpage">
            {error && (<h2>Oeps, we kunnen je blog niet vinden</h2>)}
            {loading && (<h2>We zijn je blogs aan het zoeken, nog even geduld</h2>)}

            {!error &&
                <section>
                    <h1>{blogTitle}</h1>
                    <h4>{blogSubTitle}</h4>
                    <p>Geschreven door {blogAuthor} op {dateFormatter(blogCreated)}</p>
                    <p>{blogTime} minuten lezen</p>
                    <p>{blogContent}</p>
                    <p>{blogComments} reacties - {blogShares} keer gedeeld</p>
                </section>}
            <h4><Link to="/overview">Terug naar de overzichtspagina</Link></h4>
        </section>
    )
}

export default GetBlog;