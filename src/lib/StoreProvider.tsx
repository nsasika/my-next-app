'use client';
import { JSX, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider= ({ children }: StoreProviderProps): JSX.Element  => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
