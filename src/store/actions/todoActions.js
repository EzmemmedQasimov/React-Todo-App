import {SET_TODO_FILTER,ADD_TODO,COMPLETE_TODO,DELETE_TODO} from "../actionTypes/todoActionTypes";

export const addTodo = (todo) => {
    return {
        type:ADD_TODO,
        payload:todo
    }
}

export const deleteTodo = (id) =>{
    return {
        type:DELETE_TODO,
        payload:id
    }
}

export const updateTodo = (id,complete) => {
  return {
      type:COMPLETE_TODO,
      payload:{id,complete}
  }
}

export const setTodoFilter = (filter) => {
  return {
      type:SET_TODO_FILTER,
      payload:filter
  }
}