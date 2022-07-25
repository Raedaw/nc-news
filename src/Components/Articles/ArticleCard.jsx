const ArticleCard = ({key, title, topic, date, comment_count, votes}) => {



    // title
    //image?
    // topic
    // date posted
    // number of comments
    // vote count
    return ( 

            <section className="article-card">
            <h3>{title}</h3>
            <p> {`posted to ${topic} at ${new Date(date)} `}</p>
            <ul className="article-card-li">
                <li>{comment_count} comments</li>
                <li>{votes} votes</li>
            </ul>
            </section>
    )
}
 
export default ArticleCard; 