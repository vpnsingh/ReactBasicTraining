import React, {useCallback,useState} from "react";
import City from "./City";

const State = () => {
    
    const [state, setState] = useState(false);
    const [dep] = useState(false);

    console.log("Parent Component redered");
  
    const handler = useCallback(
      (event) => {
        console.log("You clicked ", event.currentTarget);
      },
      [dep],
    );
    
    const statehanddler = () => {
      setState(!state);
    };
    return (
      <>
        <button onClick={statehanddler}>Change State Of Parent Component</button>
        <City handler={handler} />
      </>
    )
}

export default State;