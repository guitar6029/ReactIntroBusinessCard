import React from 'react';
import ReactDOM from 'react-dom/client';
import BusinessCard from './components/business-card/BusinessCard';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <div className='index-container'>
            <BusinessCard />
            <BusinessCard />
        </div>

    </React.StrictMode>
);