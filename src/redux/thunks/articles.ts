import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";


export interface PostItem {
	userId: number,
	id: number,
	title: string,
	body: string
}

//Generic CreateAsyncThunk
//1 параметр - возвращаемое значение в случае fulfilled
//2 параметр - аргументы payloadCreator, которые падают в _ (первый аргумент payloadCreator)
//3 параметр - типизация thunkApi
export const getArticles = createAsyncThunk<Array<PostItem>, void, { rejectValue: { message: string } }>(
	'get/articles',
	//payloadCreator
	async (_, thunkApi) => {
	
		const posts = await api.get<Array<PostItem>>('/posts', {
			data: {

			},
			headers: {
			
			}
		})
		
		
		if(posts.status >= 400){
			return thunkApi.rejectWithValue({
				message: 'Не удалось подключиться к серверу'
			})
		}
		
		return posts.data
	}
)