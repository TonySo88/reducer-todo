export const initialState = [{
    item: 'Learn about Reducers',
    completed: false,
    id: 123456
}]

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': // this is an action
            return [
                ...state,
                {item: action.payload,
                id: Date.now()
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed)
        default:
            return state;
    }
}