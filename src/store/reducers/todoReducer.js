import {toDoState} from "../state/toDoState";
import {SET_TODO_FILTER,ADD_TODO,COMPLETE_TODO,DELETE_TODO} from "../actionTypes/todoActionTypes";


function todoReducer(state = toDoState,action){
    switch (action.type) {
        case ADD_TODO :
            return {...state,todoList: [...state.todoList,action.payload]}
        case SET_TODO_FILTER :
            return {...state,todoFilter: action.payload}
        case DELETE_TODO :
            return {...state,todoList: state.todoList.filter((item)=>item.id!==action.payload)}
        case COMPLETE_TODO :
           const arr = [...state.todoList]
           const findedindex = arr.findIndex((item)=>item.id===action.payload.id)
           arr[findedindex].complete = action.payload.complete
           return {...state,todoList: arr}
        default :
            return state
    }
}

export default todoReducer