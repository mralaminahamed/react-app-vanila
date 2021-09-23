import Clock from './Components/Clock';
import Increment from './Components/Increment';
import Toggle from './Components/Toggle';

function App() {
  return [
    <Clock locale='bn-BD' />,
    <Clock locale='en' />,
    <Clock locale='ar-EG' />,
    <Increment />,
    <Toggle />,
    <Toggle />,
  ];
}

export default App;
