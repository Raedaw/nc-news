import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/SingleArticle.module.css";
import Votes from "../Votes";

const SingleArticle = () => {
const [article, setArticle] = useState({})
const [isLoading, setIsLoading] = useState(true);
const {article_id} = useParams()
const [errorMessage, setErrorMessage] = useState(undefined);

const [vote, setVote] = useState(0)

useEffect(()=>{
    setIsLoading(true);
    setArticle({})
    axios.get(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`).then((res)=>{
        setErrorMessage(undefined); 
        setIsLoading(false);
        setArticle(res.data.article)
    }).catch((err)=>{
        setIsLoading(false);
        setErrorMessage(err.response.data.msg)
        console.log(err)
    })
}, [article_id])



if (isLoading){
    return (
    <p>Loading...</p>    
    )
} else if (errorMessage){
return (
    <p>{errorMessage}</p> 
)
} else {

    return ( 
        
    <section class={styles.singleArticle}>  
        <h3 class={styles.title}>{article.title}</h3>
        <p>posted to: <b>{article.topic}</b> by <b>{article.author}</b></p>
        <p>{`at ${new Date(article.created_at)}`}</p>
        <p>{article.body}</p> 
        <div className={styles.comments}>

        <Votes 
        vote={vote}
        setVote={setVote}
        article={article}
        article_id={article_id}
        />
        
        <p>{article.comment_count} comments</p>
        </div> 
    </section>);
}
}
 
export default SingleArticle;