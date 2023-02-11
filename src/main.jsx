import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import AppRouter from '../src/router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<AppRouter />
	</BrowserRouter>
);
