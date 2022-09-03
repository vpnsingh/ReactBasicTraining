import React, {useEffect} from "react";

const City = ({ handler }) => {
    
    const cities = ['Mumbai','Pune', 'Nagpur', 'Nashik', 'Thane'];

    useEffect(() => {
      console.log("Child Component rendered");
    }, []);
  
    return (
      <>
        {cities.map((item, index) => {
          return (
            <div key={index} onClick={handler}>
              {item}
            </div>
          );
        })}
      </>
    );
}
  
export default React.memo(City);