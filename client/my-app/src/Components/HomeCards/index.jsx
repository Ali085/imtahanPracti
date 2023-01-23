import React, { useEffect, useState } from 'react'
import axios from "axios";
import './index.scss'
export default function HomeCards() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/users').then((res) => {
            setPost(res.data);
        });
    }, []);

    return <section className='dataAll'>
        <div className='cardHead'>
            <p className='headertxt'><strong>Practice</strong> Areas</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       <div className='CARDS'>
        {
            post.map((element) => {
                return (
                   
                        <div className='cardsData'>
                            <img src={element.imageUrl} alt="Foto" />
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </div>
                  
                )
            }

            )
        }
       </div>
        
    </section>

}


