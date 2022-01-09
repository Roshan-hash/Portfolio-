import { Replay } from '@material-ui/icons';
import React from 'react'
import './Testimonials.scss';

const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://www.jessesjourney.com/wp-content/uploads/2021/01/circle-twitter-512.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://www.seekpng.com/png/detail/3-34554_youtube-icon-logo-png-transparent-youtube-png.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "https://www.pngitem.com/pimgs/m/35-351826_linkedin-icon-png-transparent-background-linkedin-logo-png.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];


const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {data.map((item) => (
                    <div className={item.featured ? "card featured" : "card"}>
                        <div className='top'>
                            <Replay className='left'></Replay>
                            <img src={item.img} className="user" alt="user" />
                            <img className='right' src={item.icon} alt="" />
                        </div>
                        <div className='center'>
                            {item.desc}
                        </div>
                        <div className='bottom'>
                            <h3> {item.name} </h3>
                            <h4> {item.title} </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
