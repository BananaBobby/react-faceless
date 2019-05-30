import React from 'react';
import * as T from './Modal.types';

const error = 'You\'re using toasts outside of the ModalProvider';
const context = React.createContext<T.ContextData>({
  // eslint-disable-next-line
  show: () => console.error(error),
  // eslint-disable-next-line
  hide: () => console.error(error),
  // eslint-disable-next-line
  setActiveId: () => console.error(error),
  ref: null,
  activeId: null,
  visible: false,
});

export const useModal: T.UseModal = id => {
  const instance = React.useContext(context);

  return {
    ...instance,
    show: () => instance.show(id),
  };
};

export default context;
