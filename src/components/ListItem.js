import './ListItem.css'
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../store/actions/todoActions";
const ListItem = (props) => {

    const dispatch = useDispatch()
    return(
        <div className="list-item hover:bg-gray-200">
            <div className={props.className}>
                <input type="checkbox"
                       checked={props.item.complete}
                       onChange={()=>{
                            dispatch(updateTodo(props.item.id,!props.item.complete))
                       }}
                       className="mr-2 cursor-pointer"/>
                <span>{props.item.text}</span>
            </div>
            {!props.item.complete &&  <div onClick={()=>{
                dispatch(deleteTodo(props.item.id))
            }} className="remove-list-item">
                Delete
            </div>}
        </div>
    )

}

export default ListItem