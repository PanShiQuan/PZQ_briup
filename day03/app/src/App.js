import React from "react";
import "./App.css";
import MyIf from "./components/1-if";
import MyClass from "./components/2-class";
import MyFunctionComponent from "./components/test-1-if";
import MyClassComponent from "./components/test-2-class";
import MyState from "./components/day04/1-State";
import MyEvent from "./components/day04//2-MyEvent";

const PI = 3.14;
function App() {
  return (
    <div>
      hello{PI}
      {/* 组件的使用 stu="test"是APP给子组件的参数 */}
      <MyIf
        stu="test"
        arr={[1, 2, 3, 4]}
        obj={{ name: "zhengsan", age: 12 }}
      ></MyIf>
      <MyClass sut="test"></MyClass>
      <MyFunctionComponent
        stu="test"
        arr={[1, 2, 5]}
        obj={{ name: "潘峥全", age: 12 }}
      ></MyFunctionComponent>
      <MyClassComponent stu="潘峥全"></MyClassComponent>
      <br />
      =======1-State.jsx=========
      <MyState></MyState>
      =======2-MyEvent.jsx========
      <MyEvent></MyEvent>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
