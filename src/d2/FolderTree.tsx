import React from 'react';
import { FolderTreeContext } from './Contexts';

interface IProps {
  name: string;
  children: React.ReactNode;
}

export const FolderTree = (props: IProps) => {
  const [open, setOpen] = React.useState(false);

  const contextValue = {
    closeFolderTree: () => setOpen(false),
  };

  return (
    <FolderTreeContext.Provider value={contextValue}>
      <div className='d2-foldertree'>
        <div className='d2-foldertree-heading' onClick={() => setOpen(!open)}>
          {open ? '🖥️' : '🖥️'} {props.name}
        </div>
        <div className={`d2-foldertree-content ${open ? '' : 'closed'}`}>
          {props.children}
        </div>
      </div>
    </FolderTreeContext.Provider>
  );
};
