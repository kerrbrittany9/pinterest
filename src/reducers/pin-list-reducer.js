export default (state = [], action) =>  {
  switch(action.type) {
    case "ADD_PIN":
      const { id, title, content, repin } = action;
      return [
        ...state,
        {
          id: id,
          title: title,
          content: content,
          repin: repin
        }
      ];
      return newState;
      default:
        return state;
  }
}
