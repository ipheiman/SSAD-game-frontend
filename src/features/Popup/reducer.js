const initialState = {
    //fetch list of question coords from backend
    qlist:  [
            [1, 7],
            [14, 3],
            ],
  };
  
  const popupReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ATTEMPT_Q":
        return {
          //get obstacle coord, remove from qList in store
        };
      default:
        return state;
    }
  };
  
  export default popupReducer;
  