import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';

export type BannerTone = 'info' | 'success' | 'warning';

export type Banner = {
  id: string;
  message: string;
  title: string;
  tone: BannerTone;
};

type ShowBannerPayload = {
  durationMs?: number;
  id?: string;
  message: string;
  title: string;
  tone?: BannerTone;
};

type UiState = {
  banner: Banner | null;
};

const initialState: UiState = {
  banner: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showBanner: {
      reducer: (state, action: PayloadAction<Required<ShowBannerPayload>>) => {
        state.banner = {
          id: action.payload.id,
          message: action.payload.message,
          title: action.payload.title,
          tone: action.payload.tone,
        };
      },
      prepare: ({
        durationMs = 2500,
        id = nanoid(),
        message,
        title,
        tone = 'info',
      }: ShowBannerPayload) => ({
        payload: {
          durationMs,
          id,
          message,
          title,
          tone,
        },
      }),
    },
    hideBanner: (state, action: { payload: string }) => {
      if (state.banner?.id === action.payload) {
        state.banner = null;
      }
    },
  },
});

export const { hideBanner, showBanner } = uiSlice.actions;
export default uiSlice.reducer;
