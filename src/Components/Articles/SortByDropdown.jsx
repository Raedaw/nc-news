
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const SortByDropdown = ({selectedSort, setSelectedSort, selectedOrder, setSelectedOrder, selectedTopic}) => {

    let navigate = useNavigate();
    
     
    
    function handleChange(e) {
      let value = e.target.value.split("&")
      
      setSelectedSort(value[0])
      if (value.length > 1){
        setSelectedOrder(value[1].slice(6))
      }
      let path = "/articles/?"

      if (selectedTopic){
        path += `topic=${selectedTopic}&`
      }
      
        path += `sort_by=${e.target.value}`;
        navigate(path)
      }
    
    return (

<form className="sortBy-dropdown">
      <label id="sortBy_label">
        sort by:
          <select
          name="sortBy"
          id="sortBys"
          className="dropdown_box"
          onChange={handleChange}
          value={selectedOrder? `${selectedSort}&order=${selectedOrder}`: selectedSort}
        >
          <option value="created_at">Newest</option>
          <option value="created_at&order=ASC">Oldest</option>
          <option value="votes">Most Voted</option>
          <option value="votes&order=ASC">Least Voted</option>
          <option value="comment_count">Most Commented</option>
          <option value="comment_count&order=ASC">Least Commented</option>
        </select>
      </label>
    </form>
      );

}
 
export default SortByDropdown;