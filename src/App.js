import { Provider } from 'react-redux';
import './App.css';
import HEAD from './components/HEAD';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { store } from './store';
import AllMeals from './components/AllMeals/AllMeals';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HEAD />
        <AllMeals />
      </div>
    </Provider>
  );
}

export default App;
