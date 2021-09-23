import React from 'react';

const Increment = () => {
    const [counter, setCounter] = React.useState(0);

    return (
      <div className="container">
        <h1 id="display">{counter}</h1>
        {/* eslint-disable-next-line react/button-has-type */}
        <button id="button" onClick={() => setCounter(counter + 1)}>
          Increment +
        </button>
        {/* <img src={logo} alt="logo" /> */}
      </div>
    );
};

export default Increment;
