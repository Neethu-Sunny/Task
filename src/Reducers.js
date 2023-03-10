import { ADD_ITEM, REMOVE_ITEM } from "./Actiontype";

export const Reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
    
        return [...state,action.payload]
    
        case REMOVE_ITEM:
            
             const deleteArray=state.filter((item,index)=>{
                return index !== action.payload
             });
            return deleteArray;
           
            default:
                return state;
    }
};
