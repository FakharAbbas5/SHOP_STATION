const FillOrderDetailsModalReducer = (state = false, action) => {
  switch (action.type) {
    case "ShowFillOrderDetailsModal":
      return true;
    case "HideFillOrderDetailsModal":
      return false;
    default:
      return state;
  }
};

export default FillOrderDetailsModalReducer;
