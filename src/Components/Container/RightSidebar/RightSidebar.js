import React from 'react';
import './RightSidebar.css'

const RightSidebar = () => {
    const friends = [
        {
            id: 0,
            name: 'Sumaiya Akter',
            avatar: 'https://i.pinimg.com/originals/c9/ed/39/c9ed39e2a59ee0915d2a8254938757b7.jpg',
            bio: 'Take it easy'
        },
        {
            id: 2,
            name: 'Marjia Akter Mim',
            avatar: 'https://c4.wallpaperflare.com/wallpaper/251/734/498/anime-darling-in-the-franxx-girl-green-eyes-wallpaper-preview.jpg',
            bio: 'I am stubid'
        },
        {
            id: 3,
            name: 'Meher Nigar Ansary',
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/1660098614414077290/FB68019B3A6A98C8ABD5B007BB2AC4D20B4D361F/?imw=450&impolicy=Letterbox',
            bio: 'Yay! We won, jite gesi'
        },
        {
            id: 4,
            name: 'Fiza Akter',
            avatar: 'https://w0.peakpx.com/wallpaper/492/596/HD-wallpaper-orange-tabby-adorable-animal-baby-cat-kawaii-kitten-kitty-pet.jpg',
            bio: 'Thats mah boy'
        },
        {
            id: 5,
            name: 'Ifty islam Holy',
            avatar: 'https://media.istockphoto.com/id/179990790/photo/black-little-kitten-on-a-white-background.jpg?s=612x612&w=0&k=20&c=CMyF1t2xsHwQDEXV87gOMxoi8sBugTLIU-jhSdH_4Gg=',
            bio: 'Living my dream life'
        },
        {
            id: 6,
            name: 'Zara Moni',
            avatar: 'https://i.pinimg.com/originals/a7/e6/0b/a7e60b14e7402e2164d3a79ba06f0a7d.jpg',
            bio: 'Little cutie pie!!~~'
        },
        {
            id: 7,
            name: 'Jannatul Ferdous Mithila',
            avatar: 'https://w0.peakpx.com/wallpaper/402/159/HD-wallpaper-anime-school-girl-brown-hair-uniform-worried-expression-anime.jpg',
            bio: 'I am Ms Ali'
        },
    ];

    return (
        <div className='RightSidebar'>
            <div>
                <input type="text" placeholder='Search........' name="" id="" />
            </div>

            {
                friends.map(friend =>
                    <div className='friend hover' style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '10px 0' }}>
                        <img src={friend.avatar} width={50} height={50} style={{ borderRadius: "50%" }} alt="" />

                        <div>
                            <h4>{friend?.name.length <= 20 ? friend?.name : friend?.name.slice(0, 20) + '...'}</h4>
                            <p>{friend.bio}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default RightSidebar;