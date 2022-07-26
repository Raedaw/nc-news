import styles from "../../styles/ArticleCard.module.css"
import { Link } from "react-router-dom";

const ArticleCard = ({article_id, title, topic, date, comment_count, votes, author}) => {

    return ( 

            <section className={styles.article_card} key={article_id}>
                          <Link to={`/articles/${article_id}`}>
            <h4>{title}</h4>
          </Link>
                       
            <span> {`posted to `}<b>{topic}</b> {`at ${new Date(date)} by `}<b>{author}</b></span>
            <ul>
                <li><b>{comment_count}</b> comments</li>
                <li><b>{votes}</b> votes</li>
            </ul>
            </section>
    )
}
 
export default ArticleCard; 

// links for: 
// title - go to single article page
// topic - go to filter by topic
// author - go to author profile
// comment count - jumps to comments