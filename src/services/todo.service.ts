import axios from 'axios';
import { Fetcher } from 'react-router-dom';
import { Todo } from '../models/todo.model';

export async function getTodos2(url: string) {
	return (await axios.get(url)).data;
}

export async function getTodos(url: string) {
	try {
		const response = await axios.get(url);
		console.log('response', response);
		return response.data;
	} catch (error: any) {
		return Promise.reject(error);
	}
}
