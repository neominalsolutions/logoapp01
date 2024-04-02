import { useEffect, useState } from 'react';
import { getTodos } from '../services/todo.service';
import { Todo } from '../models/todo.model';

function TodoPage() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodos = async () => {
		const data = await getTodos('https://jsonplaceholder.typicode.com/todos');
		console.log('todos-data', data);
		setTodos(data);
	};

	useEffect(() => {
		// await keyword kullanamıyoruz.
		fetchTodos();
	}, []);

	return (
		<>
			<div>
				{todos.map((item: Todo) => {
					return <div key={item.id}>{item.title}</div>;
				})}
			</div>
		</>
	);
}

export default TodoPage;
