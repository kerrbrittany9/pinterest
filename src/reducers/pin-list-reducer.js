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
      ]
    case 'DELETE_PIN':
      const updatePinList = state.filter(pin => pin.id !== action.pinId);
      return updatePinList;
      default:
        return state;
  }
}
