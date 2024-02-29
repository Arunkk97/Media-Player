import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'


function Watch() {
  const[history,setHistory]=useState([])
  const getAllHistory=async()=>{
    const result=await getHistoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }
  useEffect(()=>{
    getAllHistory()
  },[])


  const deleteHistory=async(vId)=>{
    // api call
    await removeHistoryAPI(vId)
    getAllHistory()

  }
  return (

    <div className='container mt-5 mb-5'>
      <div className='d-flex justify-content-between'>
        <h2>Watch History</h2>
       <Link to={'/home'}><i class="fa-solid fa-arrow-left"></i>  Back To  <i class="fa-solid fa-house"></i></Link>
        </div>

        <table className='table mt-5 mb-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Video Link</th>
              <th>Time stamp</th>
              <th><i class="fa-solid fa-ellipsis-vertical"></i></th>
            </tr>
          </thead>
          <tbody>
            { history?.length>0? history?.map((video,index)=>(
              <tr key={index}>
              <td>{index+1}</td>
              <td>{video?.caption}</td>
              <td><a href={video?.youtubeLink} target="_blank">{video?.youtubeLink} </a></td>
              <td>{video?.timeStamp}</td>
              <td><button onClick={()=>deleteHistory(video.id)} className='btn'><i class=" text-danger fa-solid fa-trash"></i></button></td>
            </tr>

            ))
            :<tr className='text-danger fw-bolder'>Your watch history is empty!!</tr>
            }
            
          </tbody>
        </table>
    </div>

  )
}

export default Watch