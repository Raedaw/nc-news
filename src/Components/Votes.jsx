import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";


function Votes({article, article_id}){
    const [hasUpvoted, setHasUpvoted] = useState(false)
const [hasDownvoted, setHasDownvoted] = useState(false)
const [loginMsg, setLoginMsg] = useState(null)
const [loginPrompt, setLoginPrompt] = useState(null)
const {user} = useContext(UserContext);
const [errorMessage, setErrorMessage] = useState(undefined);
//const [vote, setVote] = useState(0)
const [articleVotes, setArticleVotes] = useState(0)

useEffect(()=>{
    if (!user){setLoginMsg("You must be logged in to vote!")}
    if (user){setLoginMsg(null); setLoginPrompt(null)}
setArticleVotes(article.votes)
}, [user])

    function handleLike (){
        if (loginMsg) {setLoginPrompt(loginMsg); return }
        if (!hasDownvoted){
            setArticleVotes((currVotes)=>currVotes+1) 
            setHasUpvoted(true)
            axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : 1}).then((res)=>{
           })
        }
        if (hasDownvoted){
        setArticleVotes((currVotes)=>currVotes+2)
        setHasDownvoted(false)
        setHasUpvoted(true)
        axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : 2}).then((res)=>{
           })     
        }
        }
        
    function handleUnlike (){
        if (loginMsg) {setLoginPrompt(loginMsg); return }
            setArticleVotes((currVotes)=>currVotes-1)
            setHasUpvoted(false)
            axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : -1}).then((res)=>{
            })}
        
        function handleDislike() {
            if (loginMsg) {setLoginPrompt(loginMsg); return }
            if (!hasUpvoted) {
            setArticleVotes((currVotes)=>currVotes-1)
            setHasDownvoted(true)
            axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : -1}).then((res)=>{
            })    
            }
            if (hasUpvoted) {
                setArticleVotes((currVotes)=>currVotes-2)
                setHasDownvoted(true)
                setHasUpvoted(false)
                axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : -2}).then((res)=>{
                })      
            }
        }
        
        function handleUndislike() {
            if (loginMsg) {setLoginPrompt(loginMsg); return }
            setHasDownvoted(false)
            setArticleVotes((currVotes)=>currVotes+1)
            axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : 1}).then((res)=>{
            })

        }

 return (
    <section>
    <span className="votes">{articleVotes} votes 
{hasDownvoted ? <button id="dislike-selected" onClick={handleUndislike}>👎</button> : <button id="dislike" onClick={handleDislike}>👎</button>}

{hasUpvoted ? <button id="like-selected" onClick={handleUnlike}>👍</button> : <button id="like" onClick={handleLike}>👍</button>}</span>
<p>{errorMessage}</p> 
 <p>{loginPrompt}</p>  
    </section>
 )

}

export default Votes;

// votes aren't sticking eg refresh the page or go to a new one.
// best way to record persons voting history. in user context?