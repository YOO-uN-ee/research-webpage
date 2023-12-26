import {Routes, Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';

import Control from './pages/UserTypes/Control';
import Treatment1 from './pages/UserTypes/Treatment1';
import Treatment2 from './pages/UserTypes/Treatment2';

import Intro1 from './pages/Introduction/Intro1';
import Intro2 from './pages/Introduction/Intro2';
import Intro3 from './pages/Introduction/Intro3';
import Intro4 from './pages/Introduction/Intro4';
import Intro5 from './pages/Introduction/Intro5';
import Intro6 from './pages/Introduction/Intro6';

import Aisle1 from './pages/Aisle/Aisle1';
import Aisle2 from './pages/Aisle/Aisle2';
import Aisle3 from './pages/Aisle/Aisle3';
import Aisle4 from './pages/Aisle/Aisle4';
import Aisle5 from './pages/Aisle/Aisle5';
import Aisle6 from './pages/Aisle/Aisle6';
import Aisle7 from './pages/Aisle/Aisle7';
import Aisle8 from './pages/Aisle/Aisle8';
import Aisle9 from './pages/Aisle/Aisle9';
import Aisle10 from './pages/Aisle/Aisle10';

import Checkout from './pages/Aisle/Checkout';

function App() {
  return (
    <>
    <Routes>
      {/* Control Group */}
      <Route path='/D1UQDV' element={<Control />}>
        <Route path='welcome'>
            <Route path='1' element={<Intro1 />} />
            <Route path='2' element={<Intro2 />} />
            <Route path='3' element={<Intro3 />} />
            <Route path='4' element={<Intro4 />} />
            <Route path='5' element={<Intro5 />} />
            <Route path='6' element={<Intro6 />} />
        </Route>

        <Route path='aisle'>
          <Route path='fruit' element={<Aisle1 />} />
        </Route>
      </Route>

      {/* Treatment 1 */}
      <Route path='/FFSRWM' element={<Treatment1 />}>
        <Route path='welcome'>
          <Route path='1' element={<Intro1 />} />
          <Route path='2' element={<Intro2 />} />
          <Route path='3' element={<Intro3 />} />
          <Route path='4' element={<Intro4 />} />
          <Route path='5' element={<Intro5 />} />
          <Route path='6' element={<Intro6 />} />
        </Route>
      </Route>

      {/* Treatment 2 */}
      <Route path='/L53NNR' element={<Treatment2 />}>
        <Route path='welcome'>
            <Route path='1' element={<Intro1 />} />
            <Route path='2' element={<Intro2 />} />
            <Route path='3' element={<Intro3 />} />
            <Route path='4' element={<Intro4 />} />
            <Route path='5' element={<Intro5 />} />
            <Route path='6' element={<Intro6 />} />
        </Route>
      </Route>

      {/* Admin */}
      <Route path='/5JO271' element={<Treatment2 />}>
        <Route path='welcome' element={<Intro1 />} />
        <Route path='2' element={<Intro2 />} />
        <Route path='3' element={<Intro3 />} />
        <Route path='4' element={<Intro4 />} />
        <Route path='5' element={<Intro5 />} />
        <Route path='6' element={<Intro6 />} />
      </Route>

      {/* <Route path='/' element={<HomePage />} />
      <Route path='/D1UQDV' element={<SecondPage />} />
      <Route path='/about' element={<About />} /> */}
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
