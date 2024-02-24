import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  cartToken: string | ''
}

const initialState: CartState = {
  cartToken: '',
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeCartToken: (state, action: PayloadAction<string>) => {
      state.cartToken = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCartToken } = cartSlice.actions

export default cartSlice.reducer