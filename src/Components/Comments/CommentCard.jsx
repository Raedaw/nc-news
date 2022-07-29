import styles from "../../styles/CommentsSection.module.css"
import { UserContext } from "../../Contexts/UserContext";
import { useContext } from "react";

const CommentCard = ({comment, handleDelete}) => {
    const {user} = useContext(UserContext);
    return ( 
    
    <section class={styles.comment_card} key={comment.comment_id}>
        <h4>{comment.author}:</h4>
        <p>{comment.body}</p>
        <ul class={styles.list}>
            <li>{`posted at ${new Date(comment.created_at)}`}</li>
            <li> <b>{comment.votes}</b> votes</li>
            {user.username === comment.author ? <button onClick={(()=>{handleDelete(comment.comment_id)})}>delete</button> : <></>}
        </ul>
    </section> );
}
 
export default CommentCard;