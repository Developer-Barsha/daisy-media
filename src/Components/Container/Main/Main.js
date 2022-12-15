import React from 'react';
import './Main.css'

const Main = () => {
    const posts = [
        {
            id: 0,
            poster: 'Anna Rosie',
            time: '12 December 2022',
            avatar: 'https://wallpaperaccess.com/full/4476559.jpg',
            postTitle: 'Had so much fun today >.<',
            postPicture: 'https://wallpaperaccess.com/full/4476559.jpg'
        },
        {
            id: 0,
            poster: 'Anna Rosie',
            time: '12 December 2022',
            avatar: 'https://wallpaperaccess.com/full/4476559.jpg',
            postTitle: 'Had so much fun today >.<',
            postPicture: 'https://wallpaperaccess.com/full/4476559.jpg'
        },
        {
            id: 0,
            poster: 'Anna Rosie',
            time: '12 December 2022',
            avatar: 'https://wallpaperaccess.com/full/4476559.jpg',
            postTitle: 'Had so much fun today >.<',
            postPicture: 'https://wallpaperaccess.com/full/4476559.jpg'
        },
        {
            id: 0,
            poster: 'Anna Rosie',
            time: '12 December 2022',
            avatar: 'https://wallpaperaccess.com/full/4476559.jpg',
            postTitle: 'Had so much fun today >.<',
            postPicture: 'https://wallpaperaccess.com/full/4476559.jpg'
        },
    ]

    return (
        <div className='mainScroller'>
            {posts.map(post => (<div className='post-container'>
                <div className="avatar">
                    <img src={post.avatar} width={50} height={50} style={{ borderRadius: "50%" }} alt="" />
                    <div>
                        <h3>{post.poster}</h3>
                        <p>{post.time}</p>
                    </div>
                </div>
                <div className="post">
                    <h3>{post.postTitle}</h3>
                    <img src={post.postPicture} width={500} height={300} alt="" />
                </div>
                <div className="post-interactions" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px' }}>
                    <h3 style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i class="fa-solid fa-heart"></i> Loves</h3>
                    <h3 style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i class="fa-solid fa-comment"></i> Comments</h3>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Main;