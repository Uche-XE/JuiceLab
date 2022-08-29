import React from 'react'
import styledComponents from 'styled-components'
import {Bestsellers} from './data/items'
import RecommendedProducts from './RecommendedProducts'



const Container = styledComponents.div`
padding:20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between

`;

const Products = () => {
  return (
    <Container>
      {Bestsellers.map((item,index)=>(
          <RecommendedProducts imgUrl={item.imgUrl} key={index} title={item.name} id={item.id} price={item.price}/>
      ))}
    </Container>
  ) 
}

 
export default Products