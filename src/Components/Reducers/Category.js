const categoryReducer = (state = "All", action) => {
  switch (action.type) {
    case "Electronics":
      return "Electronics";
    case "Fashion":
      return "Fashion";
    case "Books":
      return "Books";
    case "Grocery":
      return "Grocery";
    case "All":
      return "All";
    default:
      return state;
  }
};

export default categoryReducer;
