//Hola mundo con js nativo
// const element = document.createElement('h1');
// element.innerText = 'Hola React';
// const container = document.getElementById('root');
// container.appendChild(element);

//Hola mundo con React js
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hola React</h1>
const container = document.getElementById('root')

//ReactDOM.render(__QUE__,__DONDE__);
ReactDOM.render(element,container)
