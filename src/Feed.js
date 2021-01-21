import React, {useState, useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
            <h2>this is the header</h2>
            </div>
            {/* tweet box */}
            <TweetBox />

            {/* a lot of posts */}
            {posts.map(post =>(
                <Post 
                displayName={post.displayName}
                username={post.username}
                text={post.text}
                image={post.image}
                />
                
            ))}
        </div>
    )
}

export default Feed
