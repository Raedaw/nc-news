//import Select from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

const TopicsDropdown = () => {
    let navigate = useNavigate

    const [selectedTopic, setSelectedTopic] = useState([]); 

   const topics = ["coding", "football"," cooking"]
    useEffect(() => {
      axios
        .get(`http://https://rachels-nc-notes.herokuapp.com/api/articles?topic=${selectedTopic}`)
        .then((res) => {
          console.log(res)
        });
    }, [selectedTopic]);

    function handleClick (e) {
   setSelectedTopic(e.target.value)
   const path =
   selectedTopic === 'all' ? '/' : `/articles/topics/${selectedTopic}`;
 navigate(path);
      };

    return (
<div className="selectTopic">
<DropdownButton
          id="topics-dropdown"
          size="m"
          variant="info"
          title={selectedTopic}
        >
          <Dropdown.ItemText>Select a topic:</Dropdown.ItemText>
          <Dropdown.Item
            as="button"
            onClick={handleClick}
            key="all"
            value="all"
          >
            ALL
          </Dropdown.Item>
          {topics.map((topic) => {
            return (
              <Dropdown.Item
                as="button"
                key={topic}
                value={topic}
                onClick={handleClick}
              >
                {topic}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
</div>
      );

}
 
export default TopicsDropdown;