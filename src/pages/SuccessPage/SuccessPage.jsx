//Success message met link naar de met succes geplaatste blogpost

import './SuccessPage.css'
import {useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function SuccessPage() {


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

        <main>
            {error && (<h2>Oeps, we kunnen de pagina niet laden</h2>)}
            {loading && (<h2>We zijn de pagina aan het laden, nog even geduld</h2>)}

            {!error &&
            <>
                <h2 className="success-message">Je blogpost is met succes toegevoegd.</h2>
                <button type="button" onClick={fetchLatestBlog}>Klik hier om je blog te bekijken</button>
            </>}
        </main>
    )
}

export default SuccessPage