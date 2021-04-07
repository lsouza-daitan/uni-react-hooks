import React from 'react';

const useMyCustomHook = (val: string) => {
  React.useDebugValue(val);
}

const Counter = () => {
  const renderCount = React.useRef(1);
  const callCount = React.useRef(1);

  React.useEffect(() => {
    renderCount.current += 1;
  });
  callCount.current += 1;

  useMyCustomHook('Calls: ' + callCount.current);

  return (
    <div>
      I have rendered {renderCount.current} times.
    </div>
  );
};

export default Counter;
// export default React.memo(Counter);
