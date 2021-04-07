import React from 'react';
import { Button } from './Button';
import { Folder } from './Folder';
import { FolderTree } from './FolderTree';
import { FolderContext, FolderTreeContext, DeepFolderContext } from './Contexts';
import './style.css';

const CloseButton = () => {
  const folderValue = React.useContext(FolderContext);

  return (
    <Button onClick={folderValue.closeFolder}>
      Close parent folder
    </Button>
  );
};

const CloseDriveButton = () => {
  const folderTreeValue = React.useContext(FolderTreeContext);

  return (
    <Button onClick={folderTreeValue.closeFolderTree}>
      Close drive
    </Button>
  );
};

const NukeButton = () => {
  const deepFolderValue = React.useContext(DeepFolderContext);

  return (
    <Button onClick={deepFolderValue.closeAllFolders}>
      Nuke it!
    </Button>
  );
};

const DemoContext = () => (
  <div>
    <h1>Windows Explorer Demo</h1>
    <div>
      <FolderTree name='C:/'>
        <Folder name='Users/'>
          <Folder name='Leo/'>
            <Folder name='Documents/'>
              <CloseButton />
            </Folder>
            <Folder name='Pictures/'>
              <Folder name='Vacations2020/'>
                This folder is empty :(
              </Folder>
              <Folder name='TopSecret/'>
                <CloseButton />
                <NukeButton />
              </Folder>
            </Folder>
          </Folder>
        </Folder>
        <Folder name='Windows/'>
          <Folder name='System32/'>
            <CloseDriveButton />
          </Folder>
        </Folder>
      </FolderTree>
      <FolderTree name='D:/'>
        <Folder name='Lorem/'>
          <Folder name='Ipsum/'>
            <Folder name='Dolor/'>
              <Folder name='Sit/'>
                <Folder name='Amet/'>
                  <CloseButton />
                </Folder>
                <Folder name='Amok/'>
                  <CloseDriveButton />
                </Folder>
              </Folder>
            </Folder>
          </Folder>
        </Folder>
      </FolderTree>
    </div>
  </div>
);

export default DemoContext;
