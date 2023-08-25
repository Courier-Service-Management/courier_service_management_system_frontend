import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';



import Launch from './Launch';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Sample></Sample>);
//root.render(<Dashboard></Dashboard>);
//root.render(<Demo></Demo>);
//root.render(<Dash></Dash>);
root.render(<BrowserRouter>
    <Launch/>
  </BrowserRouter>)


