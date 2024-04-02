import { useEffect, useState } from 'react';

type Props = {
	title: string;
	description?: string;
};

// daha yaygın bir kullanım
export function FuntionComponentSample2({ title, description }: Props) {
	return (
		<>
			{title} - {description}
		</>
	);
}

function FunctionComponentSample(props: Props) {
	// js de var ile değişken tanımlamaları yerine ES6 standartı ile birlikte const ve let keywordleri geldi. var artık kullanmayı önermiyoruz.
	// deconsturction yöntemi
	const { title, description } = props;
	// const keyword ile yapılan tanımlamalar da değer immutable olarak tanımlanır component içinden değeri değiştiremeyiz.
	// let mutable olarak tanımlar, değişken değeri component içinde alt satırlarda değiştirilebilir.
	// setCounter setter olarak kullanılır, state günceller, isimleri kendimiz beliyoruz.
	// counter getter yani değişen state takip ettiğimiz değer
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		// component willmount
		// commit phase
		// sayfa açılırken [] sahip olan sayfaya 1 kez giriş yapar, sayfa açılışında veri çekme işlemleri burada yapılır.
		console.log('doma ilk giriş');

		return () => {
			// component willunmount
			// clean up phase
			console.log('domdan çıkış');
		};
	}, []);

	// her useEffect 1 defaya mahsus çalışır

	// sadece counter state değişiminde tetiklen.
	useEffect(() => {
		// componentdidupdate
		// commit phase
		console.log('state güncellendi');
	}, [counter]); // [...deps] // dizi olarak virgullere ayrılmış bir şekilde birden fazla state takibi yapılabilir.

	// arrow function ile function tanımlıyoruz
	const increase = () => {
		setCounter(counter + 1); // state güncellemesi
	};

	// render phase
	return (
		<>
			{/* property binding */}
			<p>{title}</p>
			<p>{description}</p>
			<p>Sayac : {counter}</p>
			{/* event binding */}
			<button onClick={increase}>(+)</button>
		</>
	);
}

export default FunctionComponentSample;
