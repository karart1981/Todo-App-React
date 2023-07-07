import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Row,Col,Button,FormControl} from 'react-bootstrap';
import classes from '../css/AddTodo.module.css';
import { FaPlusCircle } from 'react-icons/fa';

const AddTodo = ({todo, setTodo}) => {
  
  const [value,setValue] = useState("");

  function saveTodo(){
    if(value){
       setTodo(
         [ ...todo,{
           id:uuidv4(),
           title:value,
           status:true
         }]
       );
       setValue('');
  }
  }
  return (
	<Row>
    <Col className={classes.addTodoForm}>
       <FormControl placeholder="Add task" value={value} onChange={(e)=> setValue(e.target.value)}/>
       <Button onClick={saveTodo} className={classes.btn}><FaPlusCircle /></Button>
    </Col>
  </Row>
  )
}

export default AddTodo;