import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/CommentsSection.module.css"
import CommentCard from "./CommentCard";
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";


const CommentsSection = ({article}) => {
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true);
const {article_id} = useParams()
const [errorMessage, setErrorMessage] = useState(undefined);
const [errorMessageAddComment, setErrorMessageAddComment] = useState(undefined);
const [commentToAdd, setCommentToAdd] = useState({})
const {user} = useContext(UserContext);


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

function handleSubmit(e){
    e.preventDefault();
    if (!user){
      setErrorMessageAddComment("You must be logged in to post a comment"); return  
    } 
    if (!commentToAdd.body){setErrorMessageAddComment("Please enter a comment before submitting!"); return}
    setErrorMessageAddComment(undefined)
    axios.post(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}/comments`, commentToAdd).catch((err)=>{
            setErrorMessageAddComment(err.msg)
        })
    commentToAdd.comment_id = "new" 
    commentToAdd.author = user.username
    commentToAdd.created_at = Date.now()
    commentToAdd.votes = 0
    setComments((currComments)=>{
        return [commentToAdd, ...currComments]
      })
    setCommentToAdd({ username: user.username, body: "", article_id: article_id})
}

function handleChange(propName, value){
    if (errorMessageAddComment) setErrorMessageAddComment(undefined)
    setCommentToAdd({ username: user.username, [propName]: value, article_id: article_id})
}


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
    <section className="AddComment">
        <form className="new-comment-form" onSubmit={handleSubmit}>
            <textarea id="comment-textarea" name="body" value={commentToAdd.body} placeholder="Have your say..." onChange={(e)=>{handleChange("body", e.target.value)}}></textarea>
            <button type="submit" onClick={handleSubmit}>Comment</button> <p class={styles.warning}>{errorMessageAddComment}</p>
        </form>
    </section>

    <h2> Comments: </h2>
   {comments.map((comment)=>{

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