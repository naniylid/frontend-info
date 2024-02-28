import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import numbers from './assets/image/numbers.svg';
import StudyPlan from './pages/StudyPlan';

function App() {
  return (
    <>
      <Navigation />
      <img className='numbers' src={numbers} alt='' />
      <Header />
      <StudyPlan />
    </>
  );
}

export default App;
