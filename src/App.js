import { Route, Routes } from 'react-router-dom';
import { CharacterDetails } from './pages/CharacterDetails';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters/:characterId" element={<CharacterDetails />} />
    </Routes>
  );
}

export default App;
