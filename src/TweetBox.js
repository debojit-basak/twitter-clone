import React, {useState} from 'react'
import './TweetBox.css'
import {Button, Avatar} from '@material-ui/core'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Debojit Basak',
            userName: 'dbasak',
            text: tweetMessage,
            image: tweetImage,
        });
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                <Avatar src="/broken-image.jpg" />
                <input onChange={e=> setTweetMessage(e.target.value)} type="text" value={tweetMessage} placeholder="What's happening?"/>
                <input value={tweetImage} onChange={e=>setTweetImage(e.target.value)} className="tweetBox__imageInput" type="text" placeholder="Enter image URL (optional)"/>
                </div>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
