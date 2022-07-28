import ArticlesContainer from "./ArticlesContainer";
import TopicsDropdown from "../Topics/TopicsDropdown";
import { useEffect, useState } from "react";
 import { useSearchParams } from "react-router-dom";
import styles from "../../styles/ArticlesHeader.module.css"
import SortByDropdown from "./SortByDropdown";
 //current topic h2
// filter topic
// sort by  

const Articles = () => {

    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedSort, setSelectedSort] = useState("")
    const [selectedOrder, setSelectedOrder] = useState("")
     let [searchParams, setSearchParams] = useSearchParams();
     
useEffect(()=>{
    const sort = searchParams.get("sort_by");
    const order = searchParams.get("order");
      
    if (sort) setSelectedSort(sort)
    if (order) setSelectedOrder(order)
}, [])
  


   

    return ( 
<section className="articles">
    <section className={styles.articles_header}>
{selectedTopic ? <h2 className="selected-topic">{selectedTopic}</h2>:<h2> All articles</h2>}
<TopicsDropdown 
setSelectedTopic={setSelectedTopic}
selectedTopic={selectedTopic}
/>
<SortByDropdown
setSelectedTopic={setSelectedTopic}
selectedTopic={selectedTopic}
selectedSort={selectedSort}
setSelectedSort={setSelectedSort}
selectedOrder={selectedOrder}
setSelectedOrder={setSelectedOrder}/>

    </section>

           <ArticlesContainer
           selectedTopic={selectedTopic}
           setSelectedTopic={setSelectedTopic}
searchParams={searchParams}
setSearchParams={setSearchParams}
selectedSort={selectedSort}
selectedOrder={selectedOrder}
           />
</section>
 
     );
}
 
export default Articles;