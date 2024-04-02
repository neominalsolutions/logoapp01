import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentSample from './components/ClassComponentSample';
import FunctionComponentSample from './components/FunctionComponentSample';

// bir dosyadan birden fazla component dışarı çıkarmak için default keyword kullanamdan aşağıdaki gibi tanımlayabiliriz

// ilgili component ismi ile dışarı çıkarılacak ise bu durum default keyword kullanılır
// bir ts yada js dosyasında sadece 1 tane default keyword kullanılabilir
function App() {
	const [visible, setVisible] = useState<boolean>(false); // local State

	return (
		<div className="App">
			{/* <FunctionComponentSample
				title="Func Component"
				description="Function Component Desc"
			/> */}
			<input
				type="checkbox"
				onChange={() => {
					setVisible(!visible);
				}}
			/>
			Is Visible
			{/* <ClassComponentSample
				title="Class Component1"
				description="Class Component Sample1"
			/> */}
			{/* visible true ise yandaki componenti render et. */}
			{/* {visible && (
				<ClassComponentSample
					title="Class Component2"
					description="Class Component Sample2"
				/>
			)} */}
			{visible && (
				<FunctionComponentSample
					title="Class Component2"
					description="Class Component Sample2"
				/>
			)}
		</div>
	);
}

export default App;

export function Test1() {
	return <>Test 1</>;
}

export function Test2() {
	return <>Test 2</>;
}
