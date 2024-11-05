import { useState, useEffect } from 'react';
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useLocation } from "react-router-dom";
import DashboardNavbar from './DashboardNavbar';
import '../css/todo.css'
function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);
  const location = useLocation();

  const user_details= location.state?.userDetails
  console.log('inside todo',user_details);

  useEffect(() => {
    async function fetchData() {
      try {
        let id;
        if (user_details.type_of_user==="student" || user_details.type_of_user==="student_cr"){
           id=user_details.roll_no;
        }
        else{
          id=user_details.faculty_id
        }
        console.log('id',id)
        const response = await axios.get('http://127.0.0.1:8000/api/getTodosForUser/', {
          params: { roll_no: id }
        });
        setTodos(response.data.todos_details);
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    }

    fetchData();
  }, []);

  const postData = async (newTodo) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/todolist/', newTodo);
    } catch (error) {
      console.log('Error posting todo:', error);
    }
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleEdit = async (id) => {
    try {
    
      var index = todos.findIndex((item)=>{
        return item.id==id
      })
      console.log(id, index)
      var temp_todo=todos[index];
      console.log(temp_todo);
      setTodo(temp_todo.task)
      console.log('before request',id)
      handleDelete(id)
    } catch (error) {
      console.log('Error editing todo:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todolist/${id}/`);
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  const handleAdd = () => {
    
    const newTodo = {
      id: uuidv4(),
      task : todo,
      is_completed: false,
      roll_no: user_details.roll_no
    };
    setTodos([...todos, newTodo]);
    setTodo("");
    postData(newTodo);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = async (e) => {
    const id = e.target.name;
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, is_completed: !item.is_completed } : item
    );
    setTodos(updatedTodos);

    try {
      await axios.patch(`http://127.0.0.1:8000/api/todolist/${id}/`, {
        is_completed: !todos.find((item) => item.id === id).is_completed
      });
    } catch (error) {
      console.log('Error updating todo completion status:', error);
      setTodos(todos);
    }
  };

  return (

    
    <div className='todo' >
      <DashboardNavbar/>
       <div className="todo-container ">
         <div className="addTodo">
          <h2 className='text-container '>Add a Todo</h2>
          <div className="input-container">

          <input  onChange={handleChange} value={todo} type="text"  />
          <button onClick={handleAdd} disabled={todo.length<=3} >Add</button>
          </div>
         </div>
         <div className='show-finished'>

         <input  id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label  htmlFor="show">Show Finished</label> 
         </div>
         <div ></div>
         <h2 className='your-todos '>Your Todos</h2>
         <div className="todos">
          {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
          {todos.map(item=>{
 
          return (showFinished || !item.is_completed) && <div key={item.id} className={" todo "}>
            <div className='display-todo'>

  
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.is_completed} id="" />
            <div className={item.is_completed?"linethrough todo-string":"todo-string"}>{item.task}</div>
            <div className="button-container ">
              <button  onClick={(e)=>handleEdit(item.id)} className='todo-buttons'><FaEdit /></button>
              <button  onClick={(e)=>{handleDelete(item.id)}} className='todo-buttons'><AiFillDelete /></button>
            </div> 
            </div>
          </div>
          })}
         </div>
        
       </div>
    </div>
  );
}

export default Todo;
