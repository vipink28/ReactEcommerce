import { combineReducers } from "redux";

const allCategoriesReducer = (state=[], action) =>{
    if(action.type=== "FETCH_CATEGORIES"){
        return action.payload;
    }
    return state;
}


export const addCategoryreducer =(state = {}, action = {})=>{
    switch (action.type) {
      case "UPDATE_FORM_STATE":
        return {
          ...state,
          [action.form]: action.payload
        }
      default:
        return state
    }
  }


const reducers = combineReducers({
    allCategories: allCategoriesReducer,
    addCategory: addCategoryreducer
});

// Selectors
export const getFormState = (state, form) =>
  (state && state.addCategory && state.addCategory[form]) || {}

export default reducers;