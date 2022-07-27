import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";


function Votes({vote, setVote, article, article_id}){
    const [hasUpvoted, setHasUpvoted] = useState(false)
const [hasDownvoted, setHasDownvoted] = useState(false)
const [loginMsg, setLoginMsg] = useState(null)
const {user} = useContext(UserContext);
const [errorMessage, setErrorMessage] = useState(undefined);

useEffect(()=>{
    setErrorMessage(undefined);
    axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : vote}).then((res)=>{
        console.log(vote, "patched votes", res)
    }).catch((err)=>{
        setErrorMessage("Oops, this isn't working right now. Please try again later") 
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
        setVote((currVotes)=>currVotes+1)
        // axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : currVotes}).then((res)=>{
        //     console.log(vote, "patched votes", res)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        setHasDownvoted(false)
        setHasUpvoted(true)
        }
        
        function handleUnlike (){
            checkLogin()
            setVote((currVotes)=>currVotes-1)
            setHasUpvoted(false)
            }
        
        function handleDislike() {
            checkLogin()
            setHasUpvoted(false)
            setVote((currVotes)=>currVotes-1)
            setHasDownvoted(true)
        }
        
        function handleUndislike() {
            checkLogin()
            setVote((currVotes)=>currVotes+1)
            console.log(vote)
            setHasDownvoted(false)
        }

        console.log(hasUpvoted, "HAS UP")
        console.log(hasDownvoted, "HAS DOWN")
        console.log(vote)

 return (
    <section>
    <span className="votes">{vote} votes 
{hasDownvoted ? <button id="dislike-selected" onClick={handleUndislike}>👎</button> : <button id="dislike" onClick={handleDislike}>👎</button>}

{hasUpvoted ? <button id="like-selected" onClick={handleUnlike}>👍</button> : <button id="like" onClick={handleLike}>👍</button>}</span>
<p>{errorMessage}</p> 
<p>{loginMsg}</p>   
    </section>
 )

}

export default Votes;

// votes aren't sticking eg refresh the page or go to a new one.
// best way to record persons voting history. in user context?