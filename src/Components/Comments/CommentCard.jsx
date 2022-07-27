import styles from "../../styles/CommentsSection.module.css"

const CommentCard = ({comment}) => {
    return ( 
    
    <section class={styles.comment_card}>
        <h4>{comment.author}:</h4>
        <p>{comment.body}</p>
        <ul class={styles.list}>
            <li>{`posted at ${new Date(comment.created_at)}`}</li>
            <li> <b>{comment.votes}</b> votes</li>
        </ul>
    </section> );
}
 
export default CommentCard;