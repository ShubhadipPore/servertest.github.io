import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {myFirstElement} from './cars.model';
import { myArray2 } from './euations.model';

let authenticated = true;

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(authenticated ? myelement : myFirstElement);
