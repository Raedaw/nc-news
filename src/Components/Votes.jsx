import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";


function Votes({article, article_id}){
    const [hasUpvoted, setHasUpvoted] = useState(false)
const [hasDownvoted, setHasDownvoted] = useState(false)
const [loginMsg, setLoginMsg] = useState(null)
const {user} = useContext(UserContext);
const [errorMessage, setErrorMessage] = useState(undefined);
const [vote, setVote] = useState(0)
const [articleVotes, setArticleVotes] = useState(0)

useEffect(()=>{
setArticleVotes(article.votes)
}, [])


// useEffect(()=>{
//     setErrorMessage(undefined);
//     axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : vote}).then((res)=>{
//         console.log(vote, "patched votes", res.data.article.votes)
//     }).catch((err)=>{
//         setErrorMessage("Oops, this isn't working right now. Please try again later") 
//     })
//      }, [vote, article_id])

     function checkLogin() {
        if (!user){
            setLoginMsg("You must be logged in to vote!")
        } else {
            setLoginMsg(null)
        }
     }

    function handleLike (){
        checkLogin()
        setArticleVotes((currVotes)=>currVotes+1) 
        setHasDownvoted(false)
        setHasUpvoted(true)
        axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : 1}).then((res)=>{
             console.log(vote, "patched votes", res.data.article.votes)
        
       
    })
        }
        
    function handleUnlike (){
            checkLogin()
            setArticleVotes((currVotes)=>currVotes-1)
            setHasUpvoted(false)
            axios.patch(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}`, { inc_votes : -1}).then((res)=>{
            console.log(vote, "patched votes", res.data.article.votes)
                       })}
        
        function handleDislike() {
            checkLogin()
            setHasUpvoted(false)
            setVote(-1)
            setHasDownvoted(true)
        }
        
        function handleUndislike() {
            checkLogin()
            setVote(1)
            //console.log(vote)
            setHasDownvoted(false)
        }

        // console.log(hasUpvoted, "HAS UP")
        // console.log(hasDownvoted, "HAS DOWN")
        // console.log(vote)


 return (
    <section>
    <span className="votes">{articleVotes} votes 
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