import {createAsyncThunk} from "@reduxjs/toolkit";


//Generic CreateAsyncThunk
//1 параметр - возвращаемое значение в случае fulfilled
//2 параметр - аргументы payloadCreator, которые падают в _ (первый аргумент payloadCreator)
//3 параметр - типизация thunkApi
export const getArticles = createAsyncThunk<Array<string>, void, { rejectValue: { message: string } }>(
	'get/articles',
	//payloadCreator
	async (_, thunkApi) => {
	
		if(true){
			return ['']
		}
		
		return thunkApi.rejectWithValue({
			message: ''
		})
	}
)