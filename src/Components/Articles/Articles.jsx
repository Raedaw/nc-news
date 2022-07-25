import ArticlesContainer from "./ArticlesContainer";
import TopicsDropdown from "../Topics/TopicsDropdown";
import { useEffect, useState } from "react";
 import { useSearchParams } from "react-router-dom";
//current topic h2
// filter topic
// sort by  

const Articles = () => {

    const [selectedTopic, setSelectedTopic] = useState("");
     let [searchParams, setSearchParams] = useSearchParams();
     //searchParams.get("topic");
   

    return ( 
<section className="articles">
    <section className="articles-header">
{selectedTopic ? <h2>{selectedTopic}</h2>:<h2> All articles</h2>}
{/* <ul>
    <li>Topics:</li>
    <li><a href="/articles/topics">All</a></li>
    <li><a href="/articles/topics/football">Football</a></li>
    <li><a href="/articles/topics/coding">Coding</a></li>
    <li><a href="/articles/topics/cooking">Cooking</a></li>

</ul> */}
<TopicsDropdown 
setSelectedTopic={setSelectedTopic}
selectedTopic={selectedTopic}
/>
    </section>

           <ArticlesContainer
           selectedTopic={selectedTopic}
           setSelectedTopic={setSelectedTopic}
searchParams={searchParams}
setSearchParams={setSearchParams}
           />
</section>
 
     );
}
 
export default Articles;