import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import YourProfile from './Components/Widgets/YourProfile/YourProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/profile" element={<YourProfile />} />
      </Routes>
    </div>
  );
}

export default App;
