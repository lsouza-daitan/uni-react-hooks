import React from 'react';

export const FolderTreeContext = React.createContext({
  closeFolderTree() {
    console.warn('Not inside a folder tree context');
  },
});

export const FolderContext = React.createContext({
  closeFolder() {
    console.warn('Not inside a folder context');
  },
});

export const DeepFolderContext = React.createContext({
  depth: 0,
  closeAllFolders() {
    console.warn('Not inside a deep folder context');
  },
})
