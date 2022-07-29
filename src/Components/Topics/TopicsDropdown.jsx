import { useEffect, useState } from "react";
import { getTopics } from "../utils/apiPaths";
const TopicsDropdown = ({selectedTopic, setSelectedTopic}) => {
    
  const [topicsOptions, setTopicsOptions] = useState([]); 
 //get options for the topics dropdown:
    useEffect(() => { 
        getTopics().then((topics) => {
           setTopicsOptions(topics);
        });
    }, [selectedTopic]);
  
    
  function handleChange(e){
    // if (e.target.value === "all") {
    //   setSelectedTopic(undefined)
    // } else {
      setSelectedTopic(e.target.value)  
    // }
    }
  
    return (

<form className="topic-dropdown">
      <label id="topic_label">
        topic:
        <select
          name="topic"
          id="topics"
          className="dropdown_box"
          onChange={handleChange}
          value={selectedTopic}
        >
          <option>all</option>

          {topicsOptions.map((topic) => {
            return (
              <option type="reset" key={`${topic.slug}`} value={`${topic.slug}`}>
                {topic.slug}
              </option>
            );
          })}
        </select>
       
      </label>
    </form>

      );

}
 
export default TopicsDropdown;