import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { ProjectDetails } from '../pages/ProjectsDetails';

//  Routes of the website
const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/About' element={<About />} />
				<Route path='/project/:id' element={<ProjectDetails />} />
			</Routes>
		</>
	);
};

export default AppRouter;
