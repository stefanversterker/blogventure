import './NewPost.css'
/*import logo from './assets/logo-white.png'*/
/*import { Routes, Route } from 'react-router-dom';*/
import FormInput from "../../components/forminput/FormInput.jsx";
import Button from "../../components/button/Button.jsx";
import readTimeCalculator from "../../helpers/readTimeCalculator.js";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import dateFormatter from "../../helpers/dateFormatter.js";

function NewPost() {

    const [blogTitleValue, setBlogTitleValue] = React.useState('')
    const [blogSubTitleValue, setBlogSubTitleValue] = React.useState('')
    const [authorValue, setAuthorValue] = React.useState('')
    const [messageValue, setMessageValue] = React.useState('')
  /*  const [data, setData] = useState([]);*/
    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(true)

    const navigate = useNavigate();

    async function handleSubmit(e) {
        toggleError(false)
        toggleLoading(true)
        e.preventDefault();


        try {

            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                    "title": blogTitleValue,
                    "subtitle": blogSubTitleValue,
                    "content": messageValue,
                    "created": new Date(),
                    "author": authorValue,
                    "readTime": readTimeCalculator(messageValue),
                    "comments": 0,
                    "shares": 0
                },
                {
                    headers: {
                        'novi-education-project-id': 'b8985a1c-c1b7-4c00-9777-666019e0877d'
                    },
                })
            navigate(`/success/${response.data.id}`)
        } catch (error) {
            console.error("Oeps, je blog kon niet worden gepost")
            toggleError(true)
        } finally {
            toggleLoading(false)
        }

        console.log(
            {
                blogTitle: blogTitleValue,
                blogSubTitle: blogSubTitleValue,
                author: authorValue,
                message: messageValue,
                shares: 0,
                comments: 0,
                readTime: readTimeCalculator(messageValue),
                created: new Date().toISOString(),
            })
    }

    return (

        <>
            <h1>Post toevoegen</h1>

            {error && (<h2 className="error-message">Oeps, door onze nieuwe junior frontend developer, Stefan, kon je blog niet worden geplaatst 😬</h2>)}
            {loading && (<h2>Onze nieuwe junior frontend developer, Stefan, is onderweg met je post 🐌</h2>)}
            <form onSubmit={handleSubmit} className="new-blog">

                <FormInput
                    type='text'
                    id='blogTitle'
                    labelText='Titel:'
                    htmlFor='blogTitle'
                    name='blogTitle'
                    value={blogTitleValue}
                    onChange={(e) => setBlogTitleValue(e.target.value)}
                />

                <FormInput
                    type='text'
                    id='blogSubTitle'
                    labelText='Subtitel:'
                    htmlFor='blogSubTitle'
                    name='blogSubTitle'
                    value={blogSubTitleValue}
                    onChange={(e) => setBlogSubTitleValue(e.target.value)}
                />

                <FormInput
                    type='text'
                    id='author'
                    labelText='Auteur:'
                    htmlFor='author'
                    name='author'
                    value={authorValue}
                    onChange={(e) => setAuthorValue(e.target.value)}
                />

                <label htmlFor="message">
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Typ hier je bericht"
                    minLength="300"
                    maxLength="2000"
                    required
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                >
                </textarea>
                </label>

                <Button
                    type='submit'
                    buttonLabel='Toevoegen'
                />
            </form>
        </>
    )
}

export default NewPost