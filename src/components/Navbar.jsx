import { Formik, Form, Field } from 'formik';

import { TEXTS } from '../constants/TEXTS.js';

import styles from './Navbar.module.css';

const amountOfResults = [5, 10, 15, 20, 25];
const { container, selectAmountOfResults } = styles;

const Navbar = ({ setPhotos }) => {
	const onSubmit = async values => {
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
		<nav className={container}>
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
						placeholder={TEXTS.header.navBar.inputSearch.placeholder}
					/>

					<div className={selectAmountOfResults}>
						<label>{TEXTS.header.navBar.labelSelectAmountOfResults.text}</label>
						<Field
							name="amountOfResults"
							as="select"
						>
							{amountOfResults.map(value => (
								<option
									key={value}
									value={value}
								>
									{value}
								</option>
							))}
						</Field>
					</div>
				</Form>
			</Formik>
		</nav>
	);
};

export default Navbar;
