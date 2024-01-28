import { useState, useEffect } from "react";
import axios from "axios";


export function VideosHome(){
    const[videos, setVideos] = useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:'http://127.0.0.1:5000/videos'
        })
        .then(response=>{
            setVideos(response.data);

        })
    },[]);
    return(
        <div>
            <h2>Videos Home</h2>
            <div>
                {
                    videos.map(videos=>
                        <div className="card m-2 p-2" style={{width:'900px',height:'600px'}}>
                            <div className="card-header">
                                <h3>{videos.Title}</h3>

                            </div>
                            <div>
                                <iframe src={videos.Url} width="870" height="500">

                                </iframe>
                            </div>

                        </div>)
                }
            </div>
        </div>
    )
}