import css from 'styled-components';
import {useState, useEffect} from 'react';
import Lottie from "react-lottie"
import bottle1 from "../svg_image/lf30_editor_jitbnesx.json"
import bottle2 from "../svg_image/lf30_editor_cxgusz91.json"
import bottle3 from "../svg_image/lf30_editor_rovvm9en.json"
import FruitsList from './FruitsList'

const Container  = css.div`
    display: flex;
    height: 300px;
    padding-right: 120px;
    
   
`;

const BottleContainer  = css.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 50%;
    background: #f0f0f0;
    
`




const Bottle = (props) => {
    const [bottleState] = useState([]);
    const [selectedBottle, setSelectedBottle] = useState(bottle1)
    const [selectedFruits, setSelectedFruits] = useState([]);

    
    
    const handleAddFruit = (fruitName) => {
        const fruits = new Set([...selectedFruits, fruitName])
        setSelectedFruits(Array.from(fruits));

        if (fruitName.toLowerCase()==="watermelon") {
            setSelectedBottle(bottle2)
        }else if(fruitName.toLowerCase()==="kiwi") {
            setSelectedBottle(bottle3)
        }
        else if(fruitName.toLowerCase()==="guava") {
            setSelectedBottle(bottle3)
        }else if(fruitName.toLowerCase()==="mango") {
            setSelectedBottle(bottle1)
        }else if(fruitName.toLowerCase()==="pineapple") {
            setSelectedBottle(bottle1)
        }else if(fruitName.toLowerCase()==="banana") {
            setSelectedBottle(bottle1)
        }
        else {
            setSelectedBottle(bottle2);
        } 
        
    }
    useEffect(() => {
        
    }, [bottleState])
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: selectedBottle,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
        }; 
    return <Container>
        <FruitsList clicked={handleAddFruit}/>
        <BottleContainer>
            <div>
            {selectedFruits&& selectedFruits.map(fruit => {
                return <p key={fruit}>{fruit}</p>
            })}
            </div>
        <Lottie options={defaultOptions} width={300} height={300}/>

        </BottleContainer>
        
    </Container>
}

export default Bottle; 