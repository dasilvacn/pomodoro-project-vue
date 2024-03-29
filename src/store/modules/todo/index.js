export const todo = {
    state:{
        todoList : []
    },
    actions:{
        getTodo({state},getData){
            if(getData != null){
                state.todoList = getData;
            }
        },
        addTodo({state},task){
            state.todoList.push(task);
            localStorage.setItem('tasks',JSON.stringify(state.todoList));
        },
        deleteTodo({state},index){
            state.todoList.splice(index,1);
            localStorage.setItem('tasks',JSON.stringify(state.todoList));
        },

    }
}