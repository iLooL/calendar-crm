import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  id: string,
  email: string,
  verified_email: boolean,
  name: string,
  locale: string,
  picture: string,  // url to picture
}

const initialState: ProfileState = {
    id: 'null',
    email: 'null',
    verified_email: false,
    name: 'null',
    locale: 'null',
    picture: 'null',  // url to picture
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
