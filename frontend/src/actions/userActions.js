import axios from "axios"

export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })

    try {
        const response = await axios.post('/api/user/register', user)
        // console.log(response);
        dispatch({ type: 'USER_REGISTERED_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_REGISTERED_FAILED', payload: error })

    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })

    try {
        const response = await axios.post('/api/user/login', user)
        // console.log(response);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
    localStorage.setItem('currentUser', JSON.stringify(response.data))
    window.location.href='/'

} catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }
}

export const logoutUser=()=>  dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/login'
}

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_USERS_REQUEST" });
    try {
      const response = await axios.get("/api/user/getallusers");
      // console.log(response.data);
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_USERS_FAIL", payload: err });
    }
  };