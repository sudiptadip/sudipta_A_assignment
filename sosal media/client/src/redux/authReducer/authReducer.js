const initialData = {
  data: [],
};

const authReducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case "value":
      return state;
    default:
      return state;
  }
};

export default authReducer;
