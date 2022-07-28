// import { useEffect, useState } from "react";
// import { UserContext } from "../../Contexts/UserContext";
// import { useContext } from "react";

// import axios from "axios";



// const AddComment = ({setNewComment, article_id, newComment, setComments}) => {
  
//   const {user} = useContext(UserContext);
//   const [newCommentValue, setNewCommentValue] = useState("")

//     function handleSubmit(e){
//       e.preventDefault()
//       setNewComment({ username : user.username, body: newCommentValue, article_id: article_id})
//       setComments((currComments)=>{
//         return [newCommentValue, ...currComments]
//       })
//       console.log(newComment)
//     axios.post(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}/comments`, newComment).then((res)=>{
//       console.log(res)
//            })
          
//     }
// // console.log(newCommentValue)
// // console.log(newComment)
//     function handleChange(e){
//         setNewCommentValue(e.target.value)
//     }

//     return ( 
     
//   )
// }
 
// export default AddComment;