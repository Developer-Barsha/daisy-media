import React, { useState } from 'react';
import './YourProfile.css'

const YourProfile = () => {
    const [showOption, setShowOption] = useState(false);
    const [bio, setBio] = useState('Hllo everyone');

    const editBio = () => {
        setShowOption(true);
    }

    const saveBio = () => {
        setShowOption(false);
        const editInput = document.getElementById('edit-input');
        setBio(editInput?.value);
    }
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
        <div className='your-profile'>
            <img className='background-picture' src={'https://free4kwallpapers.com/uploads/originals/2021/05/08/anime-scenery-k-sx-wallpaper.jpg'} width='100%' height={300} alt="" />
            <div className='profile'>
                <img className='profile-picture' src="https://p.favim.com/orig/2018/07/31/your-name-friendship-couple-Favim.com-6110516.jpg" width='200px' height={200} alt="" />
                <div>
                    <h3>Lamia Tabassum Barsha</h3>
                    <p>{bio}</p>
                </div>
            </div>

            <div className='profile-container' style={{ display: 'flex' }}>
                <div className="profile-sidebar">
                    <div className="sector">
                        {
                            showOption &&
                            <div>
                                <input type="text" placeholder='Type your bio' name="" id="edit-input" />
                                <button onClick={() => saveBio()} id='save-btn'>Save Bio</button>
                            </div>
                        }
                        {
                            !showOption &&
                            <button onClick={() => editBio()} id='edit-btn'>Edit Your Bio</button>
                        }
                    </div>

                    <div className='sector'>
                        <h2>Informations</h2>
                        <ul>
                            <li><i className="fa-solid fa-graduation-cap"></i> <span>Narsingdi Govt. Girl's High School</span></li>
                            <li><i className="fa-solid fa-location-dot"></i> <span>Narsingdi, Bangladesh</span></li>
                            <li><i className="fa-solid fa-person"></i> <span>Female</span></li>
                            <li><i className="fa-solid fa-mosque"></i> <span>Muslim</span></li>
                        </ul>
                    </div>
                    <div className='sector'>
                        <h2>Gallery</h2>

                        <div className='profile-gallery'>
                            <img src="https://i.pinimg.com/originals/16/71/df/1671df65ef77e4b5d651f9b9b8f84b64.jpg" alt="" />
                            <img src="https://i.pinimg.com/originals/14/b1/74/14b174b835a6bdf5caaf4194a3dcb90b.jpg" alt="" />
                            <img src="https://wallpapers.com/images/high/aesthetic-cottagecore-white-flowers-4041o61g5dypdbt6.jpg" alt="" />
                            <img src="https://images.wallpaperscraft.com/image/single/daisies_flowers_flowerbed_109298_3840x2400.jpg" alt="" />
                            <img src="https://images.unsplash.com/photo-1596542519315-6db93bdf7548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                            <img src="https://www.wallpapersun.com/wp-content/uploads/2021/09/cottagecore-wallpapersun-11-715x1285.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="profile-content">
                    {posts.map(post => (
                        <div className='post-container'>
                            <div className="avatar">
                                <img src={post.avatar} width={50} height={50} style={{ borderRadius: "50%" }} alt="" />
                                <div>
                                    <h3>{post.poster}</h3>
                                    <p>{post.time}</p>
                                </div>
                            </div>
                            <div className="post">
                                <h4>{post.postTitle}</h4>
                                <img src={post.postPicture} width={500} height={300} alt="" />
                            </div>
                            <div className="post-interactions" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px' }}>
                                <h3 style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fa-solid fa-heart"></i> Loves</h3>
                                <h3 style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><i className="fa-solid fa-comment"></i> Comments</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default YourProfile;