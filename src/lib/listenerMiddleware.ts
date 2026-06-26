import { createListenerMiddleware } from '@reduxjs/toolkit';
import { hideBanner, showBanner } from './features/ui/uiSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: showBanner,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.durationMs === undefined) {
      return;
    }

    await listenerApi.delay(action.payload.durationMs);
    listenerApi.dispatch(hideBanner(action.payload.id));
  },
});
