import Style from './App.style';
import Greeting from './Greeting';
import SignIn from './SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Style.Container>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </Style.Container>
  );
};

export default App;
