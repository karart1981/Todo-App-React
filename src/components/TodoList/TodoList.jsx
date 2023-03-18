import React,{useState,useEffect} from 'react';
import {Button,FormControl,Row,Col} from 'react-bootstrap';
import classes from './TodoList.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlineKey} from 'react-icons/md';
import { MdOutlineKeyOff} from 'react-icons/md';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const TodoList = ({todo,setTodo}) => {
  const [edit,setEdit] = useState(null);
  const [value,setValue] = useState("");
  const [filtered,setFiltered] = useState(todo);
  
  useEffect(()=>{
    setFiltered(todo);
  },[todo]);
  function deleteTodo(id){
	let newTodo = [...todo].filter(item => item.id !== id);
	setTodo(newTodo);
  }
  function statusTodo(id){
	let newTodo = [...todo].filter(item => {
		if(item.id === id){
			item.status = !item.status;
		}
		return item;
	});
	setTodo(newTodo);
  }
  function editTodo(id,title){
    setEdit(id);
	setValue(title);
  }
  function saveTodo(id){
     let newTodo = [...todo].map(item =>{
		if(item.id == id){
			item.title = value;
		}
		return item;
	 });
    setTodo(newTodo);
	setEdit(null);
  }
  function todoFilter(status){
     if(status === "All"){
		setFiltered(todo);
	 } else{
		let newTodo = [...todo].filter(item => item.status === status);
		setFiltered(newTodo);
	 }
  }
  return (
	<div>
		<Row>
			<Col className={classes.filter}>
			   <ButtonGroup className={classes.btns} aria-label="Basic example">
                  <Button variant="secondary" onClick={()=> todoFilter("All")}>All</Button>
                  <Button variant="secondary" onClick={()=> todoFilter(true)}>Open tasks</Button>
                  <Button variant="secondary" onClick={()=> todoFilter(false)}>Closed tasks</Button>
               </ButtonGroup>
			</Col>
		</Row>
		
		{
		  filtered.map(item =>(
			<div key={item.id} className={classes.listItems}>
					{
						edit == item.id ?
						<div>
							<FormControl value={value} onChange={(e)=> setValue(e.target.value)}/>
						</div>
						:
						<div className={!item.status ? classes.lock : ""}>{item.title}</div>
					}

					{
						edit == item.id ?
                        <div>
							<Button onClick={()=>saveTodo(item.id)} size="md"> <FaSave/> </Button>
						</div>:
						<div>
                           <Button onClick={()=> deleteTodo(item.id)} className={classes.btn} size="md"><FaTrashAlt /></Button>
					       <Button onClick={()=> editTodo(item.id,item.title)} className={classes.btn} size="md"><FaPencilAlt /></Button>
					       <Button onClick={()=> statusTodo(item.id)} className={classes.btn} size="md"> 
						   {
							  item.status ? <MdOutlineKeyOff /> : <MdOutlineKey />
						   }
						   </Button>
						</div>
					}
				</div>
			))
		}
	</div>
  )
}

export default TodoList;