import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// containers
import { LandingPage, EpisodeDetails } from './containers';

/** @App root */
const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <div className="app">
                <header className="App-header">Header</header>
                <Route path="/" exact component={LandingPage} />
                <Route path="/episodes/:id" component={EpisodeDetails} />
            </div>
        </BrowserRouter>
    );
};

export default App;
