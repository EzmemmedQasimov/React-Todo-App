import './ListContentFooter.css'
import {useDispatch, useSelector} from "react-redux";
import {setTodoFilter} from "../store/actions/todoActions";

const ListContentFooter = () => {
    const {todoFilter,todoList} = useSelector((state => state.todo))
    const dispatch = useDispatch()
  return(
      <div className="content-footer">
          <div className="left-item">{todoList.filter((x)=>!x.complete).length + ' left'}</div>
          <div className="menu-item" onClick={()=>{
              dispatch(setTodoFilter('all'))
          }}>
                All
          </div>
          <div className="menu-item" onClick={()=>{
              dispatch(setTodoFilter('complete'))
          }}>
                Completed
          </div>
      </div>
  )
}
export default ListContentFooter