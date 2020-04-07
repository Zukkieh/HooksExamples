import React, { useState } from "react";
import "./App.css";
import CallbackExample from "./UseCallback";
import MemoExample from "./UseMemo";
import RefExample from "./UseRef";
import ReducerExample from "./UseReducer";
import StatelessComponent from "./StatelessComponent";
import StatefullComponent from "./StatefullComponent";
import UseStateExample from "./UseState";
import UseEffectExample from "./UseEffect/UseEffectExample";
import UseContextExample from "./UseContext";

export default function App() {
  const [choice, setChoice] = useState(1);

  return (
    <>
      <h1>Mudança para usar de exemplo</h1>
      <h2>Mudança feita no branch ExemploTeste</h2>
      <h2>Mudança feita no branch Master</h2>
      <aside>
        <button onClick={() => setChoice(1)}>Stateless component</button>
        <button onClick={() => setChoice(2)}>Stateful component</button>
        <button onClick={() => setChoice(3)}>UseState example</button>
        <button onClick={() => setChoice(4)}>UseEffect example</button>
        <button onClick={() => setChoice(5)}>UseContext example</button>
        <button onClick={() => setChoice(6)}>UseCallback example</button>
        <button onClick={() => setChoice(7)}>UseMemo example</button>
        <button onClick={() => setChoice(8)}>UseRef example</button>
        <button onClick={() => setChoice(9)}>UseReducer example</button>
      </aside>

      <main>
        {choice === 1 && (
          <section className="example">
            <span>STATELESS COMPONENT</span>
            <StatelessComponent count={0} />
          </section>
        )}
        {choice === 2 && (
          <section className="example">
            <span>STATEFULL COMPONENT</span>
            <StatefullComponent />
          </section>
        )}
        {choice === 3 && (
          <section className="example">
            <span>USESTATE EXAMPLE</span>
            <UseStateExample />
          </section>
        )}
        {choice === 4 && (
          <section className="example">
            <span>USEEFFECT EXAMPLE</span>
            <UseEffectExample />
          </section>
        )}
        {choice === 5 && (
          <section className="example useContextExample">
            <span>USECONTEXT EXAMPLE</span>
            <UseContextExample />
          </section>
        )}
        {choice === 6 && (
          <section className="example">
            <span>USECALLBACK EXAMPLE</span>
            <CallbackExample />
          </section>
        )}

        {choice === 7 && (
          <section className="example useMemoExample">
            <span>USEMEMO EXAMPLE</span>
            <MemoExample />
          </section>
        )}
        {choice === 8 && (
          <section className="example">
            <span>USEREF EXAMPLE</span>
            <RefExample />
          </section>
        )}
        {choice === 9 && (
          <section className="useMemoExample">
            <span>USEREDUCER EXAMPLE</span>
            <ReducerExample />
          </section>
        )}
      </main>
    </>
  );
}
