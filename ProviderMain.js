import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Card from './hotel/Card'; // Import your Card component

const App = () => {
  return (
    <Provider store={store}>
      <Card /> {/* Or your main component */}
    </Provider>
  );
};

export default App;
