import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import StartPage from './components/Views/StartPage'
import BasketPage from './components/Views/BasketPage'
import CataloguePage from './components/Views/CataloguePage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/catalogue' element={<CataloguePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
