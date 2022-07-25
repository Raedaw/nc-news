//import Select from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

const TopicsDropdown = ({selectedTopic, setSelectedTopic}) => {
    
    const [topics, setTopics] = useState([]); 

    let navigate = useNavigate();

  
    useEffect(() => {
      axios
        .get(`https://rachels-nc-notes.herokuapp.com/api/topics`)
        .then((res) => {
            console.log(selectedTopic)
          setTopics(res.data.topics);
        });
    }, [selectedTopic]);
  
    function handleChange(e) {
       if (e.target.value !== null) {
        setSelectedTopic(e.target.value);
        let path = `/articles/?topic=${e.target.value}`;
        navigate(path)
      }
      if (e.target.value === null) {
        setSelectedTopic(null);
      }

    }
  
    
    return (
<div className="selectTopic">
<form className="topic-dropdown">
      <label id="topic_label">
        Filter by topic:
        <select
          name="topic"
          id="topics"
          className="dropdown_box"
          onChange={handleChange}
          value={selectedTopic}
        >
          <option>all</option>

          {topics.map((topic) => {
            return (
              <option type="reset" value={`${topic.slug}`}>
                {topic.slug}
              </option>
            );
          })}
        </select>
       
      </label>
    </form>
</div>
      );

}
 
export default TopicsDropdown;