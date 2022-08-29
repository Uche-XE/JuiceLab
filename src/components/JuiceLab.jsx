import React from 'react'
import styledComponents from 'styled-components'
import Products from './Products'
import Carousel from "./Carousel"
import Newsletter from './Newsletter'
import Bottle from './Bottle'
//import {Link} from "react-router-dom"




const Container = styledComponents.div`
display: flex;
align-content: center;
flex-direction: row;
gap: 10px;
margin: 3px;
height: 75vh;
position: relative;
padding-bottom: 50px;
`

const Image = styledComponents.img`
width: 100%;
height: 100%;
object-fit: cover;
justify-content: space-around


`

const Info = styledComponents.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
`

const Button = styledComponents.button`
position: absolute;
border: none;
left: 50%;
top:50%;
transform: translate(-50%, -50%);
padding: 20px;
background-color: white;
color: gray;
cursor: pointer;
font-size: 25px;
font-weight: 600;
`

const Suggestions = styledComponents.h1`
margin: 100px;
color: #F1A403;
text-align: center;
`
const JuiceLab = () => {
  return (
    <div>
     
        <Carousel/> 
        <Suggestions>Create Your Own Flavor</Suggestions>
          <Bottle />

    <Suggestions>Our Bestsellers</Suggestions>
    <Container>

    <Info>
      <div style={{position:"relative"}}>
      <Button>Smoothies</Button>
        <Image src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtb290aGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>

       <div style={{position:"relative"}}>
       <Button>Milkshakes</Button>
        <Image src="https://images.unsplash.com/photo-1629993470807-33bfa488153b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>


       <div style={{position:"relative"}}>
        <Button>Juices</Button>
        <Image src="https://images.unsplash.com/photo-1621506289894-c3a62d6be8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGp1aWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>

        </Info>

       
    </Container>
   
    <Suggestions>Recommended Products</Suggestions>
 
      <Products/>
      <Newsletter/>

    </div>
  


      




  )
}

export default JuiceLab




