import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Crud from './components/crud/Crud';
import Comment from './components/comment/Comment';



function App() {
  return (
    
    <div className="container mt-5">
      <Crud />
      <br/>
      <br />
      <hr/>
      <hr/>
      <br/>
      <br/>
      <Comment/>
    </div>
  );
}

export default App;
