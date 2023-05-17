import styles from './Main.module.css';

const { container, subContainer } = styles;

const Main = ({ photos }) => {
	const open = url => window.open(url);

	return (
		<main className={container}>
			{photos.map(({ id, links, urls, alt_description, description }) => (
				<article
					className={subContainer}
					key={id}
					onClick={() => open(links.html)}
				>
					<img
						src={urls.regular}
						alt={alt_description}
					/>
					{description ? <p>{description}</p> : null}
				</article>
			))}
		</main>
	);
};

export default Main;
