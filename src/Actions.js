import { ADD_ITEM, REMOVE_ITEM } from "./Actiontype"

export const addItemToCart=data=>({
    type:ADD_ITEM,
    payload: data,
});
export const removeItemFromcart=index=>({
    type:REMOVE_ITEM,
    payload: index,
});