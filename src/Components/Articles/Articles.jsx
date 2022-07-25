import ArticlesContainer from "./ArticlesContainer";
import TopicsDropdown from "../Topics/TopicsDropdown";

//current topic h2
// filter topic
// sort by  

const Articles = () => {
    return ( 
<section className="articles">
    <section className="articles-header">
<h2> All articles</h2>
<ul>
    <li>Topics:</li>
    <li><a href="/articles/topics">All</a></li>
    <li><a href="/articles/topics/football">Football</a></li>
    <li><a href="/articles/topics/coding">Coding</a></li>
    <li><a href="/articles/topics/cooking">Cooking</a></li>

</ul>
{/* <TopicsDropdown/> */}
    </section>

           <ArticlesContainer/>
</section>
 
     );
}
 
export default Articles;