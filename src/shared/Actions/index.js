import axios from "axios"

export const fetchCategories = ()=> async(dispatch) =>{    
    const response = await axios.get('http://localhost:5000/categories');
    return dispatch({
        type: "FETCH_CATEGORIES",
        payload: response.data
    })    
}

export const updateFormState = (form, state) =>({
    type: "UPDATE_FORM_STATE",
  form,
  payload: state
})



