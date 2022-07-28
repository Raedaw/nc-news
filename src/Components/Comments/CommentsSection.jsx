import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/CommentsSection.module.css"
import CommentCard from "./CommentCard";


const CommentsSection = ({article}) => {
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true);
const {article_id} = useParams()
const [errorMessage, setErrorMessage] = useState(undefined);

useEffect(()=>{
    setIsLoading(true);
    setComments([])
    axios.get(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}/comments`).then((res)=>{
        setErrorMessage(undefined); 
        setIsLoading(false);
        setComments(res.data.comments)
    }).catch((err)=>{
        setIsLoading(false);
        setErrorMessage(err.response.data.msg)
        console.log(err)
    })
}, [article_id])


if (!article) return <p></p>
if (isLoading) {
    return (
    <p>Loading comments...</p>    
    )
} else if (comments.length===0){
    return (
        <p>No comments yet!</p>    
        )
} else if (errorMessage){
    return (
        <p>Something went wrong, please try again later!</p> 
    )
}    
return ( 
<section id="comments">
    <h2> Comments: </h2>
   {comments.map((comment)=>{
    console.log(comment)
    return (
        <CommentCard
        key={comment.comment_id}
        comment={comment}
        />
    )
   })}
</section> );
 }
  
 export default CommentsSection;