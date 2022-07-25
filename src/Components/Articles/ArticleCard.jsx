const ArticleCard = ({article_id, title, topic, date, comment_count, votes, author}) => {

    return ( 

            <section className="article-card" key={article_id}>
            <h3>{title}</h3>
            
            <span> {`posted to ${topic} at ${new Date(date)} by `}<b>{author}</b></span>
            <ul className="article-card-li">
                <li>{comment_count} comments</li>
                <li>{votes} votes</li>
            </ul>
            </section>
    )
}
 
export default ArticleCard; 