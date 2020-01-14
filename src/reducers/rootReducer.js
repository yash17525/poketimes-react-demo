import { logRoles } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const initState = {
    posts: [
        { id: '1', title: 'Bombay Times', body: 'This is a article of bombay times' },
        { id: '2', title: 'India Today', body: 'This is a article of India Today' },
        { id: '3', title: 'Tribune', body: 'This is a article of THE TRIBUNE' }
    ]
}
const rootReducer = (state = initState, action) => {
    //  console.log(action);
    if(action.type === 'DELETE_POST'){
        let newPosts  = state.posts.filter(post => action.id !== post.id)
        return({
            ...state,
            posts: newPosts
        })
    }
    return state;
}

export default rootReducer;