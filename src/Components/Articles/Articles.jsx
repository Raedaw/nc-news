import ArticlesContainer from "./ArticlesContainer";
import TopicsDropdown from "../Topics/TopicsDropdown";
import { useEffect, useState } from "react";
 import { useSearchParams } from "react-router-dom";
import styles from "../../styles/ArticlesHeader.module.css"
 //current topic h2
// filter topic
// sort by  

const Articles = () => {

    const [selectedTopic, setSelectedTopic] = useState("");
     let [searchParams, setSearchParams] = useSearchParams();
     //searchParams.get("topic");
   

    return ( 
<section className="articles">
    <section className={styles.articles_header}>
{selectedTopic ? <h2 className="selected-topic">{selectedTopic}</h2>:<h2> All articles</h2>}
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