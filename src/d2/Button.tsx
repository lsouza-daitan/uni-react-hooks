import React from 'react';

export const Button = (props: React.HTMLProps<HTMLButtonElement>) => (
  <button {...props} className='d2-button' type='button' >
    {props.children}
  </button>
);
