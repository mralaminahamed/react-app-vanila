import Clock from './Components/Clock';
import Increment from './Components/Increment';

function App() {
  return [
    <Clock locale='bn-BD' />,
    <Clock locale='en' />,
    <Clock locale='ar-EG' />,
    <Increment />,
  ];
}

export default App;
