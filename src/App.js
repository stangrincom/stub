import React from 'react';
import logo from './1.png';
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__center">
        <div className="app__icon">
           <img className={"app__img"} src={logo} />
        </div>
        <div className="app__title">
          Уважаемые участники!
        </div>
        <div className="app__text">
             9 апреля каталог Вектор будет закрыт на технические работы.
              Каталог будет доступен с 10.04
        </div>
      </div>
    </div>
  );
}

export default App;


// Уважаемые участники!
// </p>
// <p className={"helper"}>
//     9 апреля каталог Вектор будет закрыт на технические работы.
//     Каталог будет доступен с 10.04