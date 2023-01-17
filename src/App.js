// Importaciones React
import { useState } from 'react';

// Componentes de librerías
import { Formik, Form, Field } from 'formik';

// Hoja de estilo
import './App.css';

// Aplicación
const App = () => {
	const [photos, setPhotos] = useState([]);

	const open = url => window.open(url);

	const onSubmit = async values => {
		console.log(values);
		const response = await fetch(
			`https://api.unsplash.com/search/photos?per_page=${values.amountOfResults}&query=${values.search}`,
			{
				headers: {
					Authorization: 'Client-ID kut6Wq05VvK24nJnbGbvC3qCnT1TepkiX-GckRtUY-8'
				}
			}
		);
		const data = await response.json();
		setPhotos(data.results);
	};

	return (
		<div>
			<header>
				<Formik
					initialValues={{
						search: '',
						amountOfResults: '15'
					}}
					onSubmit={onSubmit}
				>
					<Form>
						<Field
							name="search"
							placeholder="Ingrese una palabra..."
						/>

						<div className="selectContainer">
							<label>Máximo de imágenes:</label>
							<Field
								name="amountOfResults"
								as="select"
							>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
							</Field>
						</div>
					</Form>
				</Formik>
			</header>

			<div className="container">
				<div className="center">
					{photos.map(photo => (
						<article
							key={photo.id}
							onClick={() => open(photo.links.html)}
						>
							<img
								src={photo.urls.regular}
								alt={photo.alt_description}
							/>
							<p>{photo.description}</p>
						</article>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
