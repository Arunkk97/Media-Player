import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';




function Add({setUploadVideoResponse}) {
    const [show, setShow] = useState(false);
    const[upload,setUpload]=useState({
        caption:"",imageURL:"",youtubeLink:""
    })

    const handleClose = () =>{
        setShow(false);
        setUpload({...upload, caption:"",imageURL:"",youtubeLink:""})
    }
    const handleShow = () => setShow(true);
    console.log(upload);

    const getYoutubeEmbedLink=(link)=>{
        if(link.includes('v=')){
            let videoId=link.split('v=')[1].slice(0,11)
            setUpload({...upload,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
        }else{
            setUpload({...upload,youtubeLink:''})
            alert('input proper youtube link')
        }
    }

    const handleUpload=async()=>{

        const {caption, imageURL,youtubeLink} = upload

        if(caption,imageURL,youtubeLink){
            //proceed to store video from 5173 to 3000

            const result=await uploadVideoAPI(upload)
            console.log(result);

            if(result.status>=200 && result.status<300){
                alert(`video'${result.data.caption}' uploaded successfully!!!`)
                setUploadVideoResponse(result.data)
                handleClose()

            }else{
                alert('API call failed...please try after sometimes')
            }





        }else{
            alert('please fill the form completely!!!')
        }

    }


    return (
        <>
            <div className="d-flex">
                <h5>Upload Video</h5>
                <button onClick={handleShow} className='btn ms-2 '><i class="fa-solid fa-arrow-up-from-bracket text-warning "></i></button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p>Please fill the form !!!</p>

                    <div className='border p-3'>
                        <FloatingLabel
                            controlId="floatingInputCaption"
                            label="Video Caption"
                            className="mb-3"
                        >
                            <Form.Control value={upload.caption} onChange={(e)=>{setUpload({...upload,caption:e.target.value})}} type="text" placeholder="Video Caption" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInputUrl"
                            label="Image Url"
                            className="mb-3"
                        >
                            <Form.Control value={upload.imageURL} onChange={(e)=>{setUpload({...upload,imageURL:e.target.value})}}  type="text" placeholder="Image Url" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInputLink"
                            label="Youtube Link"
                            className="mb-3"
                        >
                            <Form.Control value={upload.youtubeLink} onChange={(e)=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Link" />
                        </FloatingLabel>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add