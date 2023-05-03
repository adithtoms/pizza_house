import axios from 'axios'


export const getAllPizzas = () => async dispatch => {

    dispatch({ type: "GET_PIZZAS_REQUEST" })

    try {
        const result = await axios.get('/api/pizzas/getallpizzas')
        // console.log(result);
        dispatch({
            type: "GET_PIZZAS_SUCCESS",
            payload: result.data
        })

    } catch (error) {
        dispatch({
            type: "GET_PIZZAS_FAIL",
            payload: error
        })

    }

}
export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: "ADD_PIZZAS_REQUEST" });
    try {
      await axios.post("/api/pizzas/addpizza", { pizza });
      dispatch({ type: "ADD_PIZZAS_SUCCESS" });
    } catch (err) {
      dispatch({ type: "ADD_PIZZAS_FAIL", payload: err });
    }
  };

  
  
  export const filterPizza = (searchkey, category) => async (dispatch) => {
    let filterdPizza;
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    try {
      const res = await axios.get("/api/pizzas/getAllPizzas");
      filterdPizza = res.data.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchkey)
      );
      if (category !== "all") {
        filterdPizza = res.data.filter(
          (pizza) => pizza.category.toLowerCase() === category
        );
      }
      dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterdPizza });
    } catch (error) {
      dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
    }
  };
  