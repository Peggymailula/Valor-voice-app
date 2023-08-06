import React, { useState } from "react";
import "./Forum.css"

const Forum = () => {
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([]);

    const postBlog = () => {
        if (postText.trim() === '') {
            return; // Do not post empty posts
        }

        const newPost = {
            title: '@Valor_Voice_user26853', // You can customize this
            content: postText,
            date: getCurrentDate(),
        };

        setPosts([newPost, ...posts]);
        setPostText('');
    };

    const getCurrentDate = () => {
        const date = new Date();
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <div className="blog">
            <header>
                <h1>My Blog</h1>
            </header>

            <main>
                <div className="post-form">
                    <textarea
                        id="postText"
                        rows="4"
                        placeholder="Write your post here..."
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    ></textarea>
                    <button onClick={postBlog}>Post</button>
                </div>

                <div id="posts-container">
                    {posts.map((post, index) => (
                        <article key={index}>
                            <h2>{post.title}</h2>
                            <p className="meta">Posted by You on {post.date}</p>
                            <p>{post.content}</p>
                        </article>
                    ))}
                </div>
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Forum