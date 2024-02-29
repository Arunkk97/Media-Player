import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'


function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]=useState('')
  const[removeCategoryVideoResponse,setremoveCategoryVideoResponse]=useState('')
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoResponse={setUploadVideoResponse}/>
      <Link style={{textDecoration:'none',color:'white'}} to={'/Watch'}>Watch History <i class="fa-solid fa-clock-rotate-left text-warning" ></i></Link>
    </div>

    <div className="container-fluid mt-5 mb-5 row">

      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadVideoResponse={uploadVideoResponse} setremoveCategoryVideoResponse={setremoveCategoryVideoResponse}/>
      </div>

      <div className="col-lg-6">
       
       <Category/>
      </div>
    </div>

    </>
  )
}

export default Home