//Success message met link naar de met succes geplaatste blogpost

import './SuccessPage.css'
import {useState} from 'react'
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import BlogContent from "../../components/BlogContent/BlogContent.jsx";
import {useNavigate} from "react-router-dom";
/*import { Routes, Route } from 'react-router-dom';*/


function SuccessPage() {

    const [blogTitle, setBlogTitle] = useState('');
    const [blogSubTitle, setBlogSubTitle] = useState('');
    const [blogAuthor, setBlogAuthor] = useState('');
    const [blogCreated, setBlogCreated] = useState(0);
    const [blogTime, setBlogTime] = useState(0);
    const [blogContent, setBlogContent] = useState('');
    const [blogComments, setBlogComments] = useState(0);
    const [blogShares, setBlogShares] = useState(0);
    const [data, setData] = useState([]);
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false)
    const {postID} = useParams()
    const navigate = useNavigate();

    async function fetchLatestBlog(){

        toggleError(false)
        toggleLoading(true)

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
            console.log(data)

            navigate(`/blogpage/${response.data.id}`)

        } catch(error) {
            console.error(error);
            toggleError(true);
        } finally {
            toggleLoading(false)
        }
    }

    return (

        <div>
            <h2 className="success-message">Je blogpost is met succes toegevoegd.</h2>
            <button type="button" onClick={fetchLatestBlog}>Klik hier om je blog te bekijken</button>
        </div>
    )
}

export default SuccessPage