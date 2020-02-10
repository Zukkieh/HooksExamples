import React, {useEffect, useState} from 'react';

const UseEffectExample = () =>  {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `o useEffect foi executado ${count + 1} vezes`;

        return () => {
            document.title = `React App`;
        }
    }, [count]);

    return (
        <article>
            {
                count === 0 ?
                    <p>Você não clicou?</p> :
                    <p>Você clicou {count} vezes?</p>
            }
            <button onClick={() => setCount(count + 1)}>
                Clica aqui
            </button>
        </article>
    );
};

export default UseEffectExample;