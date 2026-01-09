//Dit is de detailpagina waarop het hele artikel te zien is

import './BlogPage.css';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
/*import logo from './assets/logo-white.png'*/
/*import { Routes, Route } from 'react-router-dom';*/
/*import posts from '/src/constants/data.json';*/
import {useEffect, useState} from 'react';
import dateFormatter from '/src/helpers/dateFormatter.js';
import BlogContent from "../../components/BlogContent/BlogContent.jsx";
import {useNavigate} from "react-router-dom";

function BlogPage() {

    const {postID} = useParams()
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
    const navigate = useNavigate();


    async function fetchBlogArticle() {

        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${postID}`, {
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

    async function deleteBlog() {

        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${postID}`,
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d'
                    }
                })
            navigate(`/overview`)
        } catch (error) {
            console.error(error);
            console.log("De post kon niet worden verwijderd");
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    return (


        <main>
            {error && (<h2>Oeps, we kunnen je blog niet vinden</h2>)}
            {loading && (<h2>We zijn je blogs aan het zoeken, nog even geduld</h2>)}

            {!error && <BlogContent
                blogAuthor={blogAuthor}
                blogComments={blogComments}
                blogContent={blogContent}
                blogCreated={blogCreated}
                blogShares={blogShares}
                blogSubTitle={blogSubTitle}
                blogTime={blogTime}
                blogTitle={blogTitle}
            />}

            <button type="button" onClick={deleteBlog}>verwijder dit blogartikel</button>
            <h4><Link to="/overview">Terug naar de overzichtspagina</Link></h4>
        </main>
    )
}

export default BlogPage;