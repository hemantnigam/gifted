import "./index.scss"
import GIFS from "../gifs";
import {useEffect, useState} from "react";

3 month
ember

export default function Trending({handler}) {
    const [gifList, setGifsList] = useState([])
    const fetchImages = () => {
        const api_key = '9FXt8HLKzm9QFXYG5B81sllxh5qtGj0O';
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=70`

        fetch(url,)
            .then(response=>response.json())
            .then(result=>{
                const imageList = result.data.reduce((list, image)=>{
                    const imageObj = image.images.preview_webp
                    if(imageObj) {
                        list = [...list, imageObj]
                    }
                    return list
                },[])
                setGifsList(list => [...list, ...imageList])
            })
    }
    useEffect(()=>{
        const container = document.querySelector('#trendings')
        const target = document.querySelector('#loading')
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting) {
                    fetchImages()
                }
            })
        },{
            root: null,
            threshold: 1.0,
            rootMargin: '0px'
        })

        observer.observe(target)

    },[])
    return (
        <div id="trendings" className="trendings">
            {gifList && gifList.length>0 &&<GIFS gifList={gifList}/>}
            <div id="loading" className='loading'>Loading....</div>
        </div>
    )
}
