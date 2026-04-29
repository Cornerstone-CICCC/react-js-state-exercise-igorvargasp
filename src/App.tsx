import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState<boolean>(false);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div
        style={{
          backgroundColor: isLightsOn ? 'white' : 'black',
          color: isLightsOn ? 'black' : 'white',
          padding: '1rem',
          marginTop: '0.5rem',
        }}
      >
        Lights are {isLightsOn ? 'on' : 'off'}
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output">{lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">{count}</div>
    </div>
  );
};

export default App;
