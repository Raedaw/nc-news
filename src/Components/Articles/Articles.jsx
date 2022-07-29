import ArticlesContainer from "./ArticlesContainer";
import TopicsDropdown from "../Topics/TopicsDropdown";
import { useEffect, useState } from "react";
 import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import styles from "../../styles/ArticlesHeader.module.css"
import SortByDropdown from "./SortByDropdown";

const Articles = () => {

    const [selectedTopic, setSelectedTopic] = useState(undefined);
    const [selectedSort, setSelectedSort] = useState("created_at")
    const [selectedOrder, setSelectedOrder] = useState("DESC")

     let [searchParams, setSearchParams] = useSearchParams();

const params ={
    topic: searchParams.get("topic"),
    sort_by: searchParams.get("sort_by"),
    order: searchParams.get("order")
}
let navigate = useNavigate();

 const goToArticles = ()=> {
    if (params.topic === "all" || params.topic === "null" || params.topic === undefined) delete params.topic;
    navigate({pathname: '/articles', search: `?${createSearchParams(params)}`})
 } 
    
// points to consider:
// - altering dropdown boxes based on url searchParams
// - altering url based on dropdown selections

 
useEffect(()=>{  
 if (selectedTopic) params.topic = selectedTopic
 if(selectedSort) params.sort_by = selectedSort
 if (selectedOrder) params.order = selectedOrder
console.log(createSearchParams(params))
 goToArticles()

 }, [selectedTopic, selectedSort, selectedOrder])

 useEffect(()=>{ //for extracting params from url
 const topic = searchParams.get("topic")
    const sort = searchParams.get("sort_by");
    const order = searchParams.get("order");
    if (topic) setSelectedTopic(topic)
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
selectedSort={selectedSort}
setSelectedSort={setSelectedSort}
selectedOrder={selectedOrder}
setSelectedOrder={setSelectedOrder}
/>

    </section>

<ArticlesContainer
selectedTopic={selectedTopic}
setSelectedTopic={setSelectedTopic}
searchParams={searchParams}
setSearchParams={setSearchParams}
selectedSort={selectedSort}
selectedOrder={selectedOrder}
params={params}
           />
</section>
 
     );
}
 
export default Articles;