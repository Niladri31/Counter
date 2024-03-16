 import { useState } from "react";
 import ChildComponent from './ChildComponent';
 import { Container } from "react-bootstrap";
 import './App.css'

 export default function App(){
    
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count-1);
    }

      return(
        <>
        <Container  className="header pt-5">
        <h1>Counter</h1>
        <div className="count">
        {count}
        </div>
        <ChildComponent increment={increment} decrement={decrement}/>
        </Container>
        </>
      );
    

}
