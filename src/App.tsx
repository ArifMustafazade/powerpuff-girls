import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// containers
import { LandingPage } from './containers/index';

/** @App root */
const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">Header</header>
                <Route path="/" exact component={LandingPage} />
                {/* 31         <Route path="/products/:id" component={Product} /> */}
                <footer className="App-footer">Footer</footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
