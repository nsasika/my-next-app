'use client';
import { JSX, useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps): JSX.Element => {
  const [store] = useState<AppStore>(() => makeStore());

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
