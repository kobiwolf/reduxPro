import './App.css';
import Box from './Box';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Box />
    </div>
    </Provider>
  );
}

export default App;
