import css from 'styled-components';
import fruits from '../svg_image/Images/Pictures';




const FruitsWrapper = css.div`
    width: 50%;
    background-color: #fcf5f5;
    overflow-y: auto;
    margin-left: 120px;

`;

const FruitItem = css.div`
display : flex;
align-items: center;
width: 100%;
border-bottom: 0.5px solid #838060;

`
const FruitImage = css.img`
width: 80px;
height: 80px;
padding: 5px 20px;
`
const FruitTitle = css.h3`

`



const FruitsList = ({clicked}) => {
    console.log(fruits)
    return <FruitsWrapper>
      {Object.keys(fruits).map(fruit => <FruitItem 
      onClick={() => clicked(fruit)}
      key={fruit}> 
        <FruitImage src={fruits[[fruit]]} />
        <FruitTitle> {fruit}</FruitTitle>
       
      </FruitItem>)}

    
    </FruitsWrapper>
};

export default FruitsList;