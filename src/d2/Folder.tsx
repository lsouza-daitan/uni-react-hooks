import React from 'react';
import { FolderContext, DeepFolderContext } from './Contexts';

interface IProps {
  name: string;
  children: React.ReactNode;
}

export const Folder = (props: IProps) => {
  const [open, setOpen] = React.useState(false);
  const deepFolderValue = React.useContext(DeepFolderContext);

  const provideFolderCtx = {
    closeFolder: () => setOpen(false),
  };

  const provideDeepFolderCtx = {
    depth: deepFolderValue.depth + 1,
    closeAllFolders: () => {
      setOpen(false);
      deepFolderValue.closeAllFolders();
    },
  };

  const onClickHeading = React.useCallback(
    () => {
      setOpen(!open);
    },
    [open],
  );

  return (
    <FolderContext.Provider value={provideFolderCtx}>
      <DeepFolderContext.Provider value={provideDeepFolderCtx}>
        <div className='d2-folder'>
          <div className='d2-folder-heading' onClick={onClickHeading}>
            {open ? '📂' : '📁'} {props.name} {deepFolderValue.depth}
          </div>
          <div className={`d2-folder-content ${open ? '' : 'closed'}`}>
            {props.children}
          </div>
        </div>
      </DeepFolderContext.Provider>
    </FolderContext.Provider>
  );
};
