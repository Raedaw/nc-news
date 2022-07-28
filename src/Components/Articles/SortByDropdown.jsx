//import Select from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

const SortByDropdown = ({selectedSortBy, setSelectedSortBy}) => {
    
    const [sortByOptions, setSortByOptions] = useState([]); 

    let navigate = useNavigate();

  
  
    setSortByOptions([
        "created_at",
        "votes",
        "comment_count",
      ]);
     
    function handleChange(e) {
      if (e.target.value === "all"){
        setSelectedSortBy("")
        navigate("/articles")
      }
       if (e.target.value !== null && e.target.value !== "all") {
        setSelectedSortBy(e.target.value);
        let path = `/articles/?sortBy=${e.target.value}`;
        navigate(path)
      }
      if (e.target.value === null) {
        setSelectedSortBy(null);
      }
    }
  
    
    return (

<form className="sortBy-dropdown">
      <label id="sortBy_label">
        sortBy:
        <select
          name="sortBy"
          id="sortBys"
          className="dropdown_box"
          onChange={handleChange}
          value={selectedSortBy}
        >
          <option>all</option>

          {sortBysOptions.map((sortBy) => {
            return (
              <option type="reset" value={`${sortBy.slug}`}>
                {sortBy.slug}
              </option>
            );
          })}
        </select>
       
      </label>
    </form>

      );

}
 
export default SortByDropdown;