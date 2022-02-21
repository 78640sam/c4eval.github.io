import './App.css';
import {Search} from './components/Search';
import{SearchItem} from './components/SearchItem';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/search" element={<SearchItem />}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
