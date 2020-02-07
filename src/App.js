import React, { useState } from 'react';
import './App.css'
import CallbackExample from './UseCallback';
import MemoExample from './UseMemo';
import RefExample from './UseRef';
import ReducerExample from './UseReducer';

export default function App() {

  const [chose, setChose] = useState(1);

  return (
    <div className='mainContainer'>

      <div className='optionsContainer'> 
        <button className='optionButton' onClick={() => setChose(1)}>UseCallback example</button>
        <button className='optionButton' onClick={() => setChose(2)}>UseMemo example</button>
        <button className='optionButton' onClick={() => setChose(3)}>UseRef example</button>
        <button className='optionButton' onClick={() => setChose(4)}>UseReducer example</button>
      </div>

      <div className='choseContainer'>
        {
          chose === 1 &&
            <div className='useCallbackExample'>
              <span>
                USECALLBACK EXAMPLE
              </span>
              <CallbackExample/>
            </div>
        }

        {
          chose === 2 &&
            <div className='useMemoExample'>
              <span>
                USEMEMO EXAMPLE
              </span>
              <MemoExample/>
            </div>
        }

        {
          chose === 3 &&
            <div className='useMemoExample'>
              <span>
                USEREF EXAMPLE
              </span>
              <RefExample/>
            </div>
        }

        {
          chose === 4 &&
            <div className='useMemoExample'>
              <span>
                USEREDUCER EXAMPLE
              </span>
              <ReducerExample/>
            </div>
        }
      </div>
    </div>
  );
}

