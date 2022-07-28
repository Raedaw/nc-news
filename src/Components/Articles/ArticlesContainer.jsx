import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../../styles/ArticlesContainer.module.css"


const ArticlesContainer = ({selectedTopic, setSelectedTopic, searchParams, selectedSort, selectedOrder}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(undefined);

useEffect(()=>{
    setIsLoading(true)
    let query = ""

if (searchParams.get("topic")) {
    setSelectedTopic(searchParams.get("topic"))
}

if (selectedTopic || selectedSort) {
query += "?"
}

if (selectedTopic) {
    query += `topic=${selectedTopic}`
}
if (selectedTopic && selectedSort) {
    query += "&" 
}
if (selectedSort) {
    query += `sort_by=${selectedSort}`
}
if (selectedOrder) {
    query += `&order=${selectedOrder}`
}


setArticles([])


    axios.get(`https://rachels-nc-notes.herokuapp.com/api/articles${query}`).then((response)=>{
        setErrorMessage(undefined);
        setIsLoading(false);
        setArticles(response.data.articles)
    }).catch((err)=>{
        setIsLoading(false);
        setErrorMessage("Oops, this isn't working right now. Please try again later")        
    })
}, [selectedTopic, selectedSort]);



return (     
 <section className={styles.articles_container}>
    {errorMessage ? <p>{errorMessage}</p> : ""}
    {isLoading ? <p>Loading...</p> : ""}

    
<ul>



   {articles.map((article)=>{
    return (
        <li key={article.article_id} className={styles.article_card}><ArticleCard
article_id={article.article_id }
title={article.title}
topic={article.topic}
date={article.created_at}
comment_count={article.comment_count}
votes={article.votes}
author={article.author}

/></li>
) 
    })}
    
    </ul>
   
    </section> 
    )
}
 
export default ArticlesContainer;

