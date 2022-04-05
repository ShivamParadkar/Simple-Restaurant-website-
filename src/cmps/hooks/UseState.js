import React from 'react'
import {useState,useEffect,useReducer} from 'react'

const reducer = (state, action)=> {
    if(action.type === 'INC'){
        state = state+1;
    }

    if(state>0 && action.type === 'DEC'){
        state = state-1;
    }

    return state;
};

const UseState = () => {

    // const [myNum,setNum] = useState(0);
    useEffect(()=>{
        document.title = `chats(${state})`;
    })

    const initialdata = 10;
    const [state,dispatch] = useReducer(reducer,initialdata);


  return (
    <>
    <div className="container">
        <p>{state}</p>
        {/* <button onClick={()=>{setNum(myNum + 1)}}>INC</button>
        <button onClick={myNum>0?()=>{setNum(myNum - 1)}:()=>{setNum(myNum)}}>DEC</button> */}

        <button onClick={()=>{dispatch({type:"INC"})}}>INC</button>
        <button onClick={()=>{dispatch({type:"DEC"})}}>DEC</button>
    </div>
    </>
  )
}

export default UseState