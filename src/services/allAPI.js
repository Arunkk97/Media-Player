import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// add component call upload video
export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}


// get video api called by view component
export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")

}


// store watch history

export const saveHistoryAPI=async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}


// get history to watch component

export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// remove history to watch component

export const removeHistoryAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})

}

// remove video

export const removeVideoAPI=async(videoId)=>{
return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

//save category to category component

export const addCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

// get category to category component

export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category Api
export const removeCategoryAPI=async(categoryId)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/categories/${categoryId}`,{})
}


//get single video api

export const getAVideoAPI=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}

//update category Api

export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

//get single category Api

export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}




