import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import {getArticles} from "../thunks/articles";


interface ProductsState {
	all: Array<string>
}

const initialState: ProductsState = {
	all: []
}
const Products = createSlice({
	name: 'products',
	initialState,
	reducers: {
	
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				isAnyOf(getArticles.fulfilled),
				(state, action: PayloadAction<Array<string>>) => {
					state.all = action.payload
				}
			)
	}
})

export const ProductsReducer = Products.reducer
export const {} = Products.actions