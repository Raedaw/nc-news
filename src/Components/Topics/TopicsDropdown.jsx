//import Select from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

const TopicsDropdown = ({selectedTopic, setSelectedTopic}) => {
    
    const [topicsOptions, setTopicsOptions] = useState([]); 

     
    useEffect(() => {
      axios
        .get(`https://rachels-nc-notes.herokuapp.com/api/topics`)
        .then((res) => {
            //console.log(selectedTopic)
          setTopicsOptions(res.data.topics);
        });
    }, [selectedTopic]);
  
    
  function handleChange(e){
    console.log(e.target.value)
    setSelectedTopic(e.target.value)
    console.log(selectedTopic)
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
          <option value="all">all</option>

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