
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import MainLayout from './layouts/MainLayout';
import HtmlTest from './components/TestBlock/HtmlTest';
import JsTest from './components/TestBlock/JsTest';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/test' element={<Test />} />
          <Route path='/htmltest' element={<HtmlTest />} />
          <Route path='/jstest' element={<JsTest />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
