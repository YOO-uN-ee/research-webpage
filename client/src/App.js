import './App.css';

import {Routes, Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import AutoRedirect from './pages/UserTypes/AutoRedirect';

import Intro1 from './pages/Introduction/Intro1';
import Intro2 from './pages/Introduction/Intro2';
import Intro3 from './pages/Introduction/Intro3';
import Intro4 from './pages/Introduction/Intro4';
import Intro5 from './pages/Introduction/Intro5';
import Intro6 from './pages/Introduction/Intro6';

import AisleFruit from './pages/Aisle/AisleFruit';
import DetailedFruit from './pages/Aisle/DetailedFruit';
import AisleVegetable from './pages/Aisle/AisleVegetable';
import DetailedVegetable from './pages/Aisle/DetailedVegetable';
import AisleCondiment from './pages/Aisle/AisleCondiment';
import DetailedCondiment from './pages/Aisle/DetailedCondiment';
import AisleDessert from './pages/Aisle/AisleDessert';
import DetailedDessert from './pages/Aisle/DetailedDessert';
import AisleSnack from './pages/Aisle/AisleSnack';
import DetailedSnack from './pages/Aisle/DetailedSnack';

import Treatment3 from './pages/Robot/Treatment3'
import Treatment3Pre from './pages/Robot/Treatment3Pre'
import Treatment3Post from './pages/Robot/Treatment3Post'
import Robot1 from './pages/Robot/Robot1'
import Robot2 from './pages/Robot/Robot2'
import Robot3 from './pages/Robot/Robot3'
import Robot4 from './pages/Robot/Robot4'
import Robot5 from './pages/Robot/Robot5'
import RobotExit from './pages/Robot/RobotExit'

// import Robot1 from './pages/Robot/Robot1'
// import Robot2 from './pages/Robot/Robot2'
// import Robot3 from './pages/Robot/Robot3'
// import Robot4 from './pages/Robot/Robot4'
// import Robot5 from './pages/Robot/Robot5'
// import RobotExit from './pages/Robot/RobotExit'

import Dance from './pages/Robot/Options/Dance'
import HandShake from './pages/Robot/Options/HandShake'
import Where from './pages/Robot/Options/Where'
import Recommend from './pages/Robot/Options/Recommend'
import RecommendOption from './pages/Robot/Options/RecommendOption'
import Arrive from './pages/Robot/Options/Arrive'
import MoreHelp from './pages/Robot/Options/MoreHelp'

import Checkout from './pages/Aisle/Checkout';
import PostSurvey from './pages/Outtro/PostSurvey';
import Demographics from './pages/Outtro/Demographics';
import End from './pages/Outtro/End';

import DownloadData from './pages/UserTypes/Admin'

function App() {

  // useEffect(() => {
  //   fetch("https://research-backend-3mwd.onrender.com")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);
  return (
    <>
    <Routes>
      {/* Control Group */}
      <Route path='/' element={<AutoRedirect />} />
      <Route path='/D1UQDV'>
        <Route path='welcome'>
          <Route path='' element={<Intro1 />} />
          <Route path='2' element={<Intro2 />} />
          <Route path='3' element={<Intro3 />} />
          <Route path='4' element={<Intro4 />} />
          <Route path='5' element={<Intro5 />} />
          <Route path='6' element={<Intro6 />} />
        </Route>

        <Route path='aisle'>
          <Route path='fruit' element={<AisleFruit />} />
          <Route path='fruit/detail' element={<DetailedFruit />} />

          <Route path='vegetable' element={<AisleVegetable />} />
          <Route path='vegetable/detail' element={<DetailedVegetable />} />
          
          <Route path='condiment' element={<AisleCondiment />} />
          <Route path='condiment/detail' element={<DetailedCondiment />} />

          <Route path='dessert' element={<AisleDessert />} />
          <Route path='dessert/detail' element={<DetailedDessert />} />

          <Route path='snack' element={<AisleSnack />} />
          <Route path='snack/detail' element={<DetailedSnack />} />

          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route path='thankyou'>
          <Route path='survey' element={<PostSurvey />} />
          <Route path='2' element={<Demographics />} />
          <Route path='end' element={<End />} />
        </Route>
      </Route>

      {/* Treatment 1 */}
      <Route path='/FFSRWM'>
        <Route path='welcome'>
          <Route path='' element={<Intro1 />} />
          <Route path='2' element={<Intro2 />} />
          <Route path='3' element={<Intro3 />} />
          <Route path='4' element={<Intro4 />} />
          <Route path='5' element={<Intro5 />} />
          <Route path='6' element={<Intro6 />} />
        </Route>

        <Route path='aisle'>
          <Route path='fruit' element={<AisleFruit />} />
          <Route path='fruit/detail' element={<DetailedFruit />} />

          <Route path='vegetable' element={<AisleVegetable />} />
          <Route path='vegetable/detail' element={<DetailedVegetable />} />
          
          <Route path='condiment' element={<AisleCondiment />} />
          <Route path='condiment/detail' element={<DetailedCondiment />} />

          <Route path='dessert' element={<AisleDessert />} />
          <Route path='dessert/detail' element={<DetailedDessert />} />

          <Route path='snack' element={<AisleSnack />} />
          <Route path='snack/detail' element={<DetailedSnack />} />

          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route path='help'>
          <Route path='1' element={<Robot1 />}/>
          <Route path='2' element={<Robot2 />}/>
          <Route path='3' element={<Robot3 />}/>
          <Route path='4' element={<Robot4 />}/>
          <Route path='5' element={<Robot5 />}/>
          <Route path='end' element={<RobotExit />}/>

          <Route path='dance' element={<Dance />}/>
          <Route path='handshake' element={<HandShake />}/>
          <Route path='where' element={<Where />}/>
          <Route path='recommend' element={<Recommend />}/>
          <Route path='recommend/option' element={<RecommendOption />}/>
          <Route path='arrive' element={<Arrive />}/>
          <Route path='more' element={<MoreHelp />}/>
        </Route>

        <Route path='thankyou'>
          <Route path='survey' element={<PostSurvey />} />
          <Route path='2' element={<Demographics />} />
          <Route path='end' element={<End />} />
        </Route>
      </Route>

      {/* Treatment 2 */}
      <Route path='/L53NNR'>
      <Route path='welcome'>
          <Route path='' element={<Intro1 />} />
          <Route path='2' element={<Intro2 />} />
          <Route path='3' element={<Intro3 />} />
          <Route path='4' element={<Intro4 />} />
          <Route path='5' element={<Intro5 />} />
          <Route path='6' element={<Intro6 />} />
        </Route>

        <Route path='aisle'>
          <Route path='fruit' element={<AisleFruit />} />
          <Route path='fruit/detail' element={<DetailedFruit />} />

          <Route path='vegetable' element={<AisleVegetable />} />
          <Route path='vegetable/detail' element={<DetailedVegetable />} />
          
          <Route path='condiment' element={<AisleCondiment />} />
          <Route path='condiment/detail' element={<DetailedCondiment />} />

          <Route path='dessert' element={<AisleDessert />} />
          <Route path='dessert/detail' element={<DetailedDessert />} />

          <Route path='snack' element={<AisleSnack />} />
          <Route path='snack/detail' element={<DetailedSnack />} />

          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route path='help'>
          <Route path='1' element={<Robot1 />}/>
          <Route path='2' element={<Robot2 />}/>
          <Route path='3' element={<Robot3 />}/>
          <Route path='4' element={<Robot4 />}/>
          <Route path='5' element={<Robot5 />}/>
          <Route path='end' element={<RobotExit />}/>

          <Route path='dance' element={<Dance />}/>
          <Route path='handshake' element={<HandShake />}/>
          <Route path='where' element={<Where />}/>
          <Route path='recommend' element={<Recommend />}/>
          <Route path='recommend/option' element={<RecommendOption />}/>
          <Route path='arrive' element={<Arrive />}/>
          <Route path='more' element={<MoreHelp />}/>
        </Route>

        <Route path='thankyou'>
          <Route path='survey' element={<PostSurvey />} />
          <Route path='2' element={<Demographics />} />
          <Route path='end' element={<End />} />
        </Route>
      </Route>

      {/* Human Treatment 1 */}
      <Route path='/BIKTPB'>
        <Route path='welcome'>
          <Route path='' element={<Intro1 />} />
          <Route path='2' element={<Intro2 />} />
          <Route path='3' element={<Intro3 />} />
          <Route path='4' element={<Intro4 />} />
          <Route path='5' element={<Intro5 />} />
          <Route path='6' element={<Intro6 />} />
        </Route>

        <Route path='aisle'>
          <Route path='fruit' element={<AisleFruit />} />
          <Route path='fruit/detail' element={<DetailedFruit />} />

          <Route path='vegetable' element={<AisleVegetable />} />
          <Route path='vegetable/detail' element={<DetailedVegetable />} />
          
          <Route path='condiment' element={<AisleCondiment />} />
          <Route path='condiment/detail' element={<DetailedCondiment />} />

          <Route path='dessert' element={<AisleDessert />} />
          <Route path='dessert/detail' element={<DetailedDessert />} />

          <Route path='snack' element={<AisleSnack />} />
          <Route path='snack/detail' element={<DetailedSnack />} />

          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route path='help'>
          <Route path='1' element={<Robot1 />}/>
          <Route path='2' element={<Robot2 />}/>
          <Route path='3' element={<Robot3 />}/>
          <Route path='4' element={<Robot4 />}/>
          <Route path='5' element={<Robot5 />}/>
          <Route path='end' element={<RobotExit />}/>

          <Route path='dance' element={<Dance />}/>
          <Route path='handshake' element={<HandShake />}/>
          <Route path='where' element={<Where />}/>
          <Route path='recommend' element={<Recommend />}/>
          <Route path='recommend/option' element={<RecommendOption />}/>
          <Route path='arrive' element={<Arrive />}/>
          <Route path='more' element={<MoreHelp />}/>
        </Route>

        <Route path='thankyou'>
          <Route path='survey' element={<PostSurvey />} />
          <Route path='2' element={<Demographics />} />
          <Route path='end' element={<End />} />
        </Route>
      </Route>

      {/* Human Treatment 2 */}
      <Route path='/AOTLLO'>
        <Route path='welcome'>
          <Route path='' element={<Intro1 />} />
          <Route path='2' element={<Intro2 />} />
          <Route path='3' element={<Intro3 />} />
          <Route path='4' element={<Intro4 />} />
          <Route path='5' element={<Intro5 />} />
          <Route path='6' element={<Intro6 />} />
        </Route>

        <Route path='aisle'>
          <Route path='fruit' element={<AisleFruit />} />
          <Route path='fruit/detail' element={<DetailedFruit />} />

          <Route path='vegetable' element={<AisleVegetable />} />
          <Route path='vegetable/detail' element={<DetailedVegetable />} />
          
          <Route path='condiment' element={<AisleCondiment />} />
          <Route path='condiment/detail' element={<DetailedCondiment />} />

          <Route path='dessert' element={<AisleDessert />} />
          <Route path='dessert/detail' element={<DetailedDessert />} />

          <Route path='snack' element={<AisleSnack />} />
          <Route path='snack/detail' element={<DetailedSnack />} />

          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route path='help'>
          <Route path='1' element={<Robot1 />}/>
          <Route path='2' element={<Robot2 />}/>
          <Route path='3' element={<Robot3 />}/>
          <Route path='4' element={<Robot4 />}/>
          <Route path='5' element={<Robot5 />}/>
          <Route path='end' element={<RobotExit />}/>

          <Route path='dance' element={<Dance />}/>
          <Route path='handshake' element={<HandShake />}/>
          <Route path='where' element={<Where />}/>
          <Route path='recommend' element={<Recommend />}/>
          <Route path='recommend/option' element={<RecommendOption />}/>
          <Route path='arrive' element={<Arrive />}/>
          <Route path='more' element={<MoreHelp />}/>
        </Route>

        <Route path='thankyou'>
          <Route path='survey' element={<PostSurvey />} />
          <Route path='2' element={<Demographics />} />
          <Route path='end' element={<End />} />
        </Route>
      </Route>

      <Route path='/ZOX019'>
        <Route path='welcome' element={<Treatment3 />} />
        <Route path='welcome/2' element={<Treatment3Pre />} />

        <Route path='help'>
          <Route path='1' element={<Robot1 />}/>
          <Route path='2' element={<Robot2 />}/>
          <Route path='3' element={<Robot3 />}/>
          <Route path='4' element={<Robot4 />}/>
          <Route path='5' element={<Robot5 />}/>
          <Route path='end' element={<RobotExit />}/>

          <Route path='dance' element={<Dance />}/>
          <Route path='handshake' element={<HandShake />}/>
          <Route path='where' element={<Where />}/>
        </Route>

        <Route path='thankyou/1' element={<PostSurvey />} />
        <Route path='thankyou/2' element={<Treatment3Post />} />
        <Route path='thankyou/end' element={<End />} />

      </Route>

      <Route path='/2SGB9I' element={<DownloadData />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
