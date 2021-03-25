import uuid from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';


export const addTask = ({parentID,taskTitle,taskColor,taskDescription,taskDueDate,taskComments}) =>({
      type:ADD_TASK,
      payload:{
         id: uuid.v4(),
         parentID,
         taskTitle,
         taskColor,
         taskDescription,
         taskDueDate,
         taskComments,
      }

   })
   
export const editTask= ({id,parentID,taskTitle,taskColor,taskDescription,taskDueDate,taskComments}) => ({  // ({data})
   type:EDIT_TASK,
   payload: {
      //...data
      id,
      parentID,
      taskTitle,
      taskColor,
      taskDescription,
      taskDueDate,
      taskComments,
   }
})

export const deleteTask = id =>({
   type:DELETE_TASK,
   payload:{
      id,
   }
})