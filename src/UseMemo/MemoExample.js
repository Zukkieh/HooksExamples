import React, { useState, useMemo } from 'react';

import './MemoExample.css';

import MOCK from '../MOCKS/useMemoExample';

import Display from '../Display';

export default function UseMemo() {

    const [count, setCount] = useState(0);
    const [render, setRender] = useState(false);

    const returnOddOnly = useMemo(() => {
        const odd = MOCK.filter(obj => obj.value%2 === 1)
        return odd;
    }, []);

    const returnOddOnlyR = () => {
        return MOCK[Math.floor(Math.random() * (13 - 1 + 1)) + 1];
    };

    return (
        <div className='simpleMemoContainer'>
            { !render && 
                <Display
                    odd={returnOddOnly}
                />
            }
            { render && 
                <Display
                    odd={[returnOddOnlyR()]}
                />
            }
            <button
                style={{width:'30%', marginTop: 10}}
                onClick={() => setCount(old => old+1)}
            >
                {count}
            </button>
            <button
                style={{width:'100%', marginBottom: 10, marginTop: 10}}
                onClick={() => setRender(old => !old)}
            >
                {`RENDERING: ${render}`}
            </button>
        </div>
    );
}
