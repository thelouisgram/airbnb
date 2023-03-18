import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import datas from './components/Data';

export default function App() {
	const cardData = datas.map((data) => {
		return <Card key={data.id} {...data}/>;
	});

	return (
		<div>
			<Navbar />
			<Hero />
      <section className="card--list">
			{cardData}
      </section>
		</div>
	);
}
