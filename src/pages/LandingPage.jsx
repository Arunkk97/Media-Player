import React from 'react'
import { Card } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    // navigate to home page
    navigate('/home')

  }
  return (


    <>
      <div className='container mt-5'>
        <div className="header row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media <br />Player</span></h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Media Player is a free and open source cross-platform multimedia player and framework that plays most multimedia files, and various streaming protocols.</p>
            <button onClick={handleNavigate} className="btn btn-info mt-3">Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img className='w-100' src="https://i.pinimg.com/originals/05/e9/f2/05e9f2dba5f0bde5ec8bd5af923604e0.gif" alt="" />
          </div>
        </div>

        <div className="features">
          <h3 className="text-center mb-5">Features</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card >
                <Card.Img style={{height:'310px'}} variant="top" src="https://38.media.tumblr.com/0f92b303266d10f398ec3afb5d5218bd/tumblr_n8u2bbdZiL1rx8jaio1_500.gif" />
                <Card.Body>
                  <Card.Title>Guitar</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 ">
            <Card >
                <Card.Img variant="top" src="https://media1.tenor.com/m/QypIq1-NTsEAAAAC/drummer-drums.gif" />
                <Card.Body>
                  <Card.Title>Drums</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card >
                <Card.Img variant="top" src="https://i.gifer.com/UpyW.gif" />
                <Card.Body>
                  <Card.Title>Keyboard</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="video">
          <div className='row   mt-5 align-items-center'>
            <div className="col-lg-5 p-3">
              <h3 className='text-warning pb-2'>Simple, Fast and Powerful</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nostrum saepe ipsa deserunt atque vel repellendus provident earum facere dolorum? Nisi ipsum similique vitae perspiciatis illum cum ipsam est ea?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem corporis labore quos nemo ad voluptatem sit vitae beatae cumque doloremque dolore voluptates dicta, exercitationem, quisquam vel a rem incidunt eligendi.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque natus itaque ipsam culpa qui quod veritatis, laboriosam, eius sequi accusantium voluptates in, fuga totam blanditiis laborum odio quos a magnam!</p>
      
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-6">
            <iframe width="540" height="360" src="https://www.youtube.com/embed/bMsSITwl0Dk" title="15 Second audio visualizer black screen video music player icon background effects editing mp3 audio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr />

    </>

  )
}

export default LandingPage