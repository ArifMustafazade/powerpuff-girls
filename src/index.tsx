import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// styles
import './styles/main.scss';

// redux stuff
import detailsReducer from './store/reducers/details';
import episodesReducer from './store/reducers/episodes';

// root component
import App from './App';

const rootReducer = combineReducers({
    showDetails: detailsReducer,
    episodesList: episodesReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
