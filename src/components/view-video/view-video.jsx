import { useParams,Link } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";



export function ViewVideo(){


const params = useParams();
const [videos, setVideos] = useState([{VideoId:0, Title:'',Url:'',Likes:0,Dislikes:0,Views:0,CategoryId:0}]);

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:5000/videos/${params.id}`
        })
        .then(response=>{
            setVideos(response.data);
        })
    },[])

    return(
        <div>
            <h2>{videos[0].Title}</h2>
            <iframe height="400px" width="700px" src={videos[0].Url}></iframe>
            <p>
                <Link to="/admin-home">Back to Home</Link>
            </p>
        </div>
    )
}