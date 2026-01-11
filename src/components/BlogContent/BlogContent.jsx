//Dit component bevat de inhoud van een blogpost

import './BlogContent.css'
import dateFormatter from "../../helpers/dateFormatter.js";


function BlogContent({blogTitle, blogSubTitle, blogAuthor, blogCreated, blogTime, blogContent, blogComments, blogShares,}) {
    return (

        <section className="blogpage">
            <h1>{blogTitle}</h1>
            <h4>{blogSubTitle}</h4>
            <p>Geschreven door {blogAuthor} op {dateFormatter(blogCreated)}</p>
            <p>{blogTime} minuten lezen</p>
            <p>{blogContent}</p>
            <p>{blogComments} reacties - {blogShares} keer gedeeld</p>
        </section>
    )}

export default BlogContent