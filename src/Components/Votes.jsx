import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";


function Votes({vote, setVote, article, article_id}){
    const [hasUpvoted, setHasUpvoted] = useState(false)
const [hasDownvoted, setHasDownvoted] = useState(false)
const [loginMsg, setLoginMsg] = useState(null)
const {user, setUser} = useContext(UserContext);

useEffect(()=>{
    axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : vote}).then((res)=>{
        console.log(vote, "patched votes", res)
    }).catch((err)=>{
        console.log(err)
    })
     }, [vote, article_id])

     function checkLogin() {
        if (!user){
            setLoginMsg("You must be logged in to vote!")
        } else {
            setLoginMsg(null)
        }
     }

    function handleLike (){
        checkLogin()
        setHasDownvoted(false)
        setVote(1)
        setHasUpvoted(true)
        }
        
        function handleUnlike (){
            checkLogin()
            setVote(0)
            setHasUpvoted(false)
            }
        
        function handleDislike() {
            checkLogin()
            setHasUpvoted(false)
            setVote(-1)
            setHasDownvoted(true)
        }
        
        function handleUndislike() {
            checkLogin()
            setVote(0)
            setHasDownvoted(false)
        }

        console.log(hasUpvoted, "HAS UP")
        console.log(hasDownvoted, "HAS DOWN")

 return (
    <section>
    <span className="votes">{article.votes+vote} votes 
{hasDownvoted ? <button id="undislike" onClick={handleUndislike}>👎</button> : <button id="dislike" onClick={handleDislike}>👎</button>}

{hasUpvoted ? <button id="unlike" onClick={handleUnlike}>👍</button> : <button id="like" onClick={handleLike}>👍</button>}</span> 
<p>{loginMsg}</p>   
    </section>
 )

}

export default Votes;