const AddComment = () => {

    function handleSubmit(e){
console.log(e.target.value)
    }

    return ( 
        <section className="AddComment">
    <form onSubmit={handleSubmit}>
    <textarea id="comment-textarea" placeholder="Add your comment..."></textarea>
    <br/>
    <input type="submit" value="Comment"/>
    <br/>
  </form> 
</section>
  )
}
 
export default AddComment;