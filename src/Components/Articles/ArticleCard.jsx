const ArticleCard = ({key, title, topic, date, comment_count, votes, author}) => {



    // title
    //image?
    // topic
    // date posted
    // number of comments
    // vote count
    return ( 

            <section className="article-card" key={key}>
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