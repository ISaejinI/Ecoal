import styles from './article.module.css'
import ThisArticle from '../ThisArticle/thisarticle'
import { Route, Link, Routes } from "react-router-dom"

function Article(props) {
    //<ThisArticle id={props.id}/>
    const thumbnailURL = "http://localhost:8000/" + props.thumbnailURL
    return (
        <>
            <Link to={`/articles/${props.id}`}>
                <div className={styles.box}>
                    <img src={thumbnailURL}></img>
                    <h2>{props.title}</h2>
                </div>
            </Link>

        </>
    )
}

export default Article

