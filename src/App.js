import { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';

const App = () => {
	const [photos, setPhotos] = useState([]);

	return (
		<>
			<Navbar setPhotos={setPhotos} />
			<Main photos={photos} />
		</>
	);
};

export default App;
