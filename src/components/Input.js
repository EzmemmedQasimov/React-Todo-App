import './Input.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../store/actions/todoActions";
const Input = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch()

  return (
      <div className="input-wrapper">
          <input type="text"
            value={text}
                 onKeyPress={(e)=>{
                     if (e.key==="Enter" && text.trim()!==""){
                        dispatch(addTodo({id:new Date().getTime(),text,complete:false}))
                         setText("")
                     }
                 }}
                 onChange={(e)=>{setText( e.target.value)}}
          autoFocus
          placeholder="Create new TODO"/>
      </div>
  )
}

export default Input