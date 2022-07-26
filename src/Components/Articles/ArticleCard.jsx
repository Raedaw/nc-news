import styles from "../../styles/ArticleCard.module.css"

const ArticleCard = ({article_id, title, topic, date, comment_count, votes, author}) => {

    return ( 

            <section className={styles.article_card} key={article_id}>
            <h3>{title}</h3>
            
            <span> {`posted to `}<b>{topic}</b> {`at ${new Date(date)} by `}<b>{author}</b></span>
            <ul>
                <li>{comment_count} comments</li>
                <li>{votes} votes</li>
            </ul>
            </section>
    )
}
 
export default ArticleCard; 