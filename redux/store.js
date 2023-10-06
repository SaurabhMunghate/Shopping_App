// // store.js
// import { createStore } from 'redux';

// // Initial state
// const initialState = {
//   shoppingCart: []
// };

// // Reducer
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return {
//         ...state,
//         shoppingCart: [...state.shoppingCart, action.payload]
//       };
//     default:
//       return state;
//   }
// };

// // Create store
// const store = createStore(rootReducer);

// export default store;

// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;

