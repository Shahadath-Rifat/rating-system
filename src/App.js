

import './style/index.css';
import React from 'react';
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";




function App() {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <body>
      <div className='container'>
      <StarRating />
      <button onClick={() => setShowDialog(true)}>Show Dialog</button>
      {showDialog && <Dialog onClose={() => setShowDialog(false)} />}
    </div>
    </body>
  );
}

export default App;
