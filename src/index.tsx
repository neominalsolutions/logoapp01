import React from 'react'; // default import
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App, { Test1, Test2 } from './App';
import ClassComponentSample from './components/ClassComponentSample';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// React da elementler aksi belirtilmediği sürece self closing tag olarak çağırılır.
// <Component />
// <Layout>element</Layout> open-close tag ile tanımlama (bu kullanım için özel bir şekilde tanımlanmalıdır.)
root.render(
	<>
		{/* <Test1 />
		<Test2 />
		<App /> */}
		<App />
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
