import React from 'react';
import Main from './../../Container/Main/Main';
import './YourProfile.css'

const YourProfile = () => {
    return (
        <div className='your-profile'>
            <img className='background-picture' src={'https://free4kwallpapers.com/uploads/originals/2021/05/08/anime-scenery-k-sx-wallpaper.jpg'} width='100%' height={300} alt="" />
            <div className='profile'>
                <img className='profile-picture' src="https://p.favim.com/orig/2018/07/31/your-name-friendship-couple-Favim.com-6110516.jpg" width='200px' height={200} alt="" />
                <div>
                    <h3>Lamia Tabassum Barsha</h3>
                    <p>Looking for new ways to happiness</p>
                </div>
            </div>

            <div className='profile-container' style={{ display: 'flex' }}>
                <div className="profile-sidebar">
                    <button>Edit Your Bio</button>

                    <div className='sector'>
                        <h2>Informations</h2>
                        <ul>
                            <li><i class="fa-solid fa-graduation-cap"></i> <span>Narsingdi Govt. Girl's High School</span></li>
                            <li><i class="fa-solid fa-location-dot"></i> <span>Narsingdi, Bangladesh</span></li>
                            <li><i class="fa-solid fa-person"></i> <span>Female</span></li>
                            <li><i class="fa-solid fa-mosque"></i> <span>Muslim</span></li>
                        </ul>
                    </div>
                    <div className='sector'>
                        <h2>Gallery</h2>
                        
                    </div>
                </div>

                <div className="profile-content">

                </div>
            </div>
        </div>
    );
};

export default YourProfile;