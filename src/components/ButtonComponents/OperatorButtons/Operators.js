import React, {useState} from "react";
import OperatorButtons from "./OperatorButton"
import {operators} from "../../../data" 


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [ops, setOps] = useState(operators);

  const opsArr = ops.map(item => <OperatorButtons data={item["char"]}/>);

  return (

   

    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {opsArr}
    </div>
  );
};

export default Operators;
