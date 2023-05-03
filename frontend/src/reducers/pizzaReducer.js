
export const getAllPizzasReducer = (state = {pizzas:[]}, action) => {

    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                loading:true,
                ...state
            }
        case 'GET_PIZZAS_SUCCESS':
            return {
                loading:false,
                pizzas: action.payload
            }

        case 'GET_PIZZAS_FAIL':
            return {
                error: action.payload,
                loading:false
            }

        default:
            return state
            

    }

    

}

export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_PIZZAS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_PIZZAS_SUCCESS":
        return {
          success: true,
          loading: false,
        };
      case "ADD_PIZZAS_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

