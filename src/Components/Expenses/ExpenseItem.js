import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
// function clickHander()
const [title, setTitle] = useState(props.title);

  const clickHandler = () =>{
    setTitle('updated');
  };
  return (
    <Card className="expense-item">
    <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
