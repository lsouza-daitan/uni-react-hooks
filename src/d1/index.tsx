import React from 'react';
import moment from 'moment';
import Counter from './Counter';

const DemoRef = () => {
  const [clock, setClock] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clockAsText = moment(clock).format('h:mm:ss');

  return (
    <div>
      <h1>Clock Demo</h1>
      <div>It is now {clockAsText}</div>
      <Counter />
    </div>
  );
};

export default DemoRef;
