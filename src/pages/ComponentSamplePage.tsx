import { useState } from 'react';
import FunctionComponentSample from '../components/FunctionComponentSample';

function ComponentSamplePage() {
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

export default ComponentSamplePage;

export function Test1() {
	return <>Test 1</>;
}

export function Test2() {
	return <>Test 2</>;
}
