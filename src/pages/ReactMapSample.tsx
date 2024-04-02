import { FormEvent, useState } from 'react';

// API dan gelen Todolar interface tanımları ile eşleştirilir.
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

function ReactMapSample() {
	const [todo, setTodo] = useState<Todo>({
		id: 1,
		completed: false,
		title: '',
	}); // todo eklenemeden önceki değerleri tutuğumuz state
	const [todos, setTodos] = useState<Todo[]>([]); // form değerlerini listeye push edip ekranda gösterdiğimiz state

	const onTitleChange = (event: FormEvent<HTMLInputElement>) => {
		console.log('onTitleChange', event.currentTarget);
		// ... spread operatörü virtual domda referans güncellemesini tetikler.
		// obje ile çalıştırğımızdan referans type olduğundan spread operatörü kullandık.

		// yanlış kullanım
		// todo.title = event.currentTarget.value;
		// setTodo(todo);

		const value = { ...todo, title: event.currentTarget.value } as Todo;
		setTodo(value);
	};

	const onCompleteChange = (event: FormEvent<HTMLInputElement>) => {
		console.log('onCompleteChange', event);

		const value = { ...todo, completed: event.currentTarget.checked } as Todo;
		setTodo(value);
	};

	const formSubmit = (event: FormEvent<HTMLFormElement>) => {
		// current state push
		event.preventDefault(); // formun post olmasını engelleyeceğiz.
		console.log('form-submit');
		//todos.push(todo as Todo);
		//setTodos(todos);
		// Not referans type değerler ile çalışırken (array,object) nesnenin yeni referansını döndürmemiz virtual dom'un güncellenmesini sağlar.
		// o yüzden spread operatörü kullanımı yaptık.
		const value = [todo, ...todos] as Todo[]; // todo listesine yeri bir item append oldu.
		setTodos(value);
		setTodo({ title: '', completed: false, id: 0 });
	};

	return (
		<>
			Todo Object: {todo.title}
			<form onSubmit={formSubmit}>
				<input
					type="text"
					value={todo.title}
					onChange={onTitleChange}
					placeholder="title"
				/>
				<br></br>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={onCompleteChange}
				/>{' '}
				IsCompleted ?<br></br>
				<button type="submit">Ekle</button>
			</form>
			<hr />
			<div>
				{todos.map((item: Todo, index: number) => {
					return (
						<div
							style={
								item?.completed
									? { backgroundColor: 'green', color: 'yellow' }
									: { backgroundColor: 'red', color: 'white' }
							}
							key={index}
						>
							{item?.title} {/* ternaryif */}
							{item?.completed ? 'tamamlandı' : 'henüz tamamlanmadı'}
						</div>
					);
				})}
			</div>
		</>
	);
}

export default ReactMapSample;
