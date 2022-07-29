
import axios from "axios";
import { useEffect, useState } from "react";



const SortByDropdown = ({selectedSort, setSelectedSort, selectedOrder, setSelectedOrder, selectedTopic}) => {

  function handleChange(e) {
        setSelectedSort(e.target.value)
        }
  function handleOrder(e){
    setSelectedOrder(e.target.value)
  }
    
    return (
    <section>
   <form className="sortBy-dropdown">
      <label id="sortBy_label">
        sort by:
          <select
          name="sortBy"
          id="sortBys"
          className="dropdown_box"
          onChange={handleChange}
          value={selectedSort}
        >
          <option value="created_at">Created at</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      </label>
    </form> 
    <form className="order-by" onClick={handleOrder} value={selectedOrder}></form>
    <button value="DESC">↓</button>  
    <button value="ASC">↑</button>  
    </section>


      );

}
 
export default SortByDropdown;