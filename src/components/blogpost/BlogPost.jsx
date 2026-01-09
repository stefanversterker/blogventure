//Dit is een list item voor de Overview pagina

import './BlogPost.css'
import {Link, useParams} from "react-router-dom";
import {useState} from 'react'
import {useEffect} from 'react'
import axios from "axios";

function BlogPost() {


    const {postID} = useParams();
    const [data, setData] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);

    async function fetchBlog() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/', {
                headers: {
                    'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d'
                },
            })
            setData(response.data);
            console.log(response.data);

        } catch (error) {
            console.error("Oeps, we kunnen je blogs niet vinden")
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    useEffect(() => {
        void fetchBlog();
    }, [])

    return (

        <>

                {error && (<h2>Oeps, we kunnen je blogs niet vinden</h2>)}
                {loading && (<h2>We zijn je blogs aan het zoeken, nog even geduld</h2>)}

                {!error && data.map((c) => (
                    <li key={c.id}>
                        <article className="blogpost-container">
                            <div className="title-and-blogger">
                                <Link to={`/blogpage/${c.id}`}>
                                    <h5 className="blog-title">{c.title}</h5>
                                </Link>
                                <h6 className="blogger-name">({c.author})</h6>
                            </div>
                            <h6 className="reactions-shared">{c.comments} reacties - {c.shares} keer gedeeld</h6>
                        </article>
                    </li>))}
        </>
    )
}

export default BlogPost;