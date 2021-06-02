import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialStatee: {
    base: 'small',
    crust: 'classic',
    sauce: 'no_sauce',
    cheese: 'no_cheese',
  },
  reducers: {
    chooseBase: (state, action) => { state.base = action.payload},
    chooseCrust: (state, action) => { state.crust = action.payload},
    chooseSauce: (state, action) => { state.sauce = action.payload},
    chooseCheese: (state, action) => { state.cheese = action.payload},
  }
})

export const reducer = rootSlice.reducer;

export const { chooseBase, chooseCheese, chooseCrust, chooseSauce } = rootSlice.actions
