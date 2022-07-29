const SortByDropdown = ({selectedSort, setSelectedSort, selectedOrder, setSelectedOrder}) => {

  function handleChange(e) {
    const [sort_by, order] = e.target.value.split(" ")

        setSelectedSort(sort_by)
        setSelectedOrder(order)
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
          value={`${selectedSort} ${selectedOrder}`}
        >
          <option value="created_at DESC">Newest</option>
          <option value="created_at ASC">Oldest</option>
          <option value="votes DESC">Votes</option>
          <option value="comment_count DESC">Comments</option>
        </select>
      </label>
    </form> 

    </section>


      );

}
 
export default SortByDropdown;