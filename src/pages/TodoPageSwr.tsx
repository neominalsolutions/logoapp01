import { useEffect, useState } from 'react';
import { getTodos } from '../services/todo.service';
import { Todo } from '../models/todo.model';
import useSWR, { Fetcher, mutate } from 'swr';

function TodoPageSwr() {
	const fakeData = [
		{
			id: 1,
			title: 'Todo-1',
		},
		{ id: 2, title: 'Todo-2' },
		{ id: 3, title: 'Todo-3' },
		{ id: 4, title: 'Todo-5' },
		{ id: 5, title: 'Todo-2' },
		{ id: 6, title: 'Todo-3' },
		{ id: 7, title: 'Todo-5' },
		{ id: 8, title: 'Todo-2' },
		{ id: 9, title: 'Todo-3' },
		{ id: 10, title: 'Todo-5' },
	];

	// useEffect yerine server state çekme işlemlerinde daha çok tercih ediliyor.

	const fetcher: Fetcher<Todo[], string> = (key: string) =>
		getTodos('https://jsonplaceholder.typicode.com/todos');

	// const fetcher: Fetcher<any[], string> = (key: string) => {
	// 	const firstIndex = Math.round(Math.random() * fakeData.length - 1);
	// 	const middleIndex = Math.round(Math.random() * fakeData.length - 1);
	// 	const lastIndex = Math.round(Math.random() * fakeData.length - 1);

	// 	const arr = [];

	// 	arr.push(fakeData[firstIndex], fakeData[middleIndex], fakeData[lastIndex]);

	// 	return arr;
	// };

	//  key veri çekilirken kullanılan o ilgili dataya ait bir key, bu key üzerinden veri çekme işlemini tekrar key unvalidate ederek, verinin tekrardan çekilmesi sağlanıyor

	// 2 saniyede bir reflesh at.
	// const { isLoading, data, error } = useSWR('todos', fetcher, {
	// 	refreshInterval: 2000,
	// });

	const { isLoading, data, error } = useSWR('todos', fetcher);

	console.log('isLoading', isLoading);
	console.log('data', data);
	console.log('error', error);

	if (isLoading) {
		return <>Yükleme Yapılıyor</>;
	}

	if (error) {
		return <>Yükleme yapılırken hata meydana geldi</>;
	}

	return (
		<>
			{data && (
				<>
					<button
						onClick={() => {
							mutate('todos'); // clear only a certain cache key
						}}
					>
						Manuel Clear Cache
					</button>
					<div>
						{data.map((item: Todo) => {
							return <div key={item.id}>{item.title}</div>;
						})}
					</div>
				</>
			)}
		</>
	);
}

export default TodoPageSwr;
