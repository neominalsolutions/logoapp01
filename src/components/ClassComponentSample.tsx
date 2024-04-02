import { Component, ReactNode } from 'react';
import './ClassComponentSample.css';

// Notlar
// props => componentin ilk initialize işlemi için component attribute olarak dışarıdan tanımlanan değerler.
// kalıtım yolu ile constructor değerlerin base Component gönderilmesini sağlar.
// <></> fragment tsx dosyasında elementleri tanımladığımız tag. html yansımaz.
// style her zaman aynı stil verilirse class değerlerini ovverride eder.
// class Property
type Props = {
	title: string;
	description?: string; // optional
};

// component içerisinde kullanıcı etkileşimleri ise state vasıtası ile olur.
// state değişimi re-render tetikler
type State = {
	counter: number;
};

class ClassComponentSample extends Component<Props, State> {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(props: Props) {
		super(props);
		this.state = { counter: 0 }; // state component ilk açıldığındaki değeri
		// bu component için event listener tanımı yaptık.
		// bu methodu buradaki class bind et.
		// event bind sadece class componentlere özgü bir durum.
		this.Increase = this.Increase.bind(this);
	}

	// Arrow Function ile Method tanımı this.Increase.bind(this) keyword gerek yok fakat class componentlerde arrow function kullanımı önerilmiyor.
	// IncreaseA = () => {
	// 	this.setState({ counter: this.state.counter + 1 });
	// };

	// Method.
	Increase() {
		// state güncellemeleri setState özel methodu ile yapılıyor
		this.setState({ counter: this.state.counter + 1 });
	}

	// Component Life-Cycle Methods (Render Phase, Commit Phase, Cleanup Phase)

	// component ilk initialize anını yakaldık
	// 1 seferliğe çalışır.
	componentDidMount(): void {
		console.log('commit-phase: => component doma girince tetiklendi');
		// sayfa yüklenirken async veri çekme işlemleri burada yapılır.
	}

	// state değişimini yakaladık
	// her bir state değişiminde çalışıyor
	componentDidUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<State>,
		snapshot?: any
	): void {
		console.log(
			'commit-phase: => state değişiminde tetiklendi',
			prevProps,
			prevState
		);
	}

	// component domdan çıkış anını yakaladık.
	componentWillUnmount(): void {
		console.log('clean up phase: => component domdan çıkınca tetiklendi');
	}

	render(): ReactNode {
		console.log('...rendering');
		console.log('render-phase');
		return (
			<div className="container" style={{ color: 'red' }}>
				<p>Title: {this.props.title}</p>
				{/* model binding */}
				<p>Decription: {this.props.description}</p>
				{/* event binding */}
				<p>Sayac: {this.state.counter}</p>
				<button onClick={this.Increase}>(+)</button>
			</div>
		);
	}
}

export default ClassComponentSample;
