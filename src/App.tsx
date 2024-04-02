import { Link, Outlet, useRoutes } from 'react-router-dom';
import './App.css';
import ComponentSamplePage from './pages/ComponentSamplePage';
import ReactMapSample from './pages/ReactMapSample';

// bir dosyadan birden fazla component dışarı çıkarmak için default keyword kullanamdan aşağıdaki gibi tanımlayabiliriz

// ilgili component ismi ile dışarı çıkarılacak ise bu durum default keyword kullanılır
// bir ts yada js dosyasında sadece 1 tane default keyword kullanılabilir
function App() {
	return useRoutes([
		{
			path: '',
			element: (
				<>
					<div style={{ padding: '10px' }}>
						<nav style={{ padding: '5px' }}>
							{/* Uygulama içi Linkler için Link componenti kullanırız */}
							<Link to="/component-sample">Component Sample</Link>{' '}
							<Link to="/react-map">React Map</Link>
							{/* uygulama dışı linkler */}{' '}
							<a href="https://www.google.com" target="_self">
								Google
							</a>
						</nav>
						<main>
							{/* Componentlerin url istekleri sonucunda main elementi içerisinde doma basılmasını sağlayan bir component. */}
							<Outlet />
						</main>
					</div>
				</>
			),
			children: [
				// ana path'e bağlı olan routelar yazılır
				{
					path: 'react-map',
					Component: ReactMapSample,
				},
				{
					path: 'component-sample',
					Component: ComponentSamplePage,
				},
			],
		},
	]);
}

export default App;
