import { useParams,Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";



export function DeleteVideo(){


const params = useParams();
const [videos, setVideos] = useState([{VideoId:0, Title:'',Url:'',Likes:0,Dislikes:0,Views:0,CategoryId:0}]);
const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method:'get',
            url:`http://127.0.0.1:5000/videos/${params.id}`
        })
        .then(response=>{
            setVideos(response.data);
        })
    },[])

    function handleDeleteClick(){
        axios({
            method:'delete',
            url: `http://127.0.0.1:5000/deletevideo/${params.id}`
        })
        alert('Video Deleted');
        navigate('/admin-home');
    }

    return(
        <div>
            <h1>Deleting Video {videos[0].Title} are you sure?</h1>
            
            <iframe height="300px" width="400px" src={videos[0].Url}></iframe>
            <p>
               <button onClick={handleDeleteClick} className="btn btn-danger">Yes</button> <Link to="/admin-home" className="btn btn-warning">Cancel</Link>
            </p>
        </div>
    )
}