export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log(action)
  switch(action.type) {

    case 'INCREASE_COUNT':
      return Object.assign({}, {
        items: state.items.concat(state.items.length + 1)
      });

    case 'DECREASE_COUNT':
        return Object.assign({}, {
          items: state.items.slice(0, -1)
        })

    default:
      return state;
  }
};
