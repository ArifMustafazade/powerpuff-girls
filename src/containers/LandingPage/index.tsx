import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

// action types
import * as actions from '../../store/actions';

// interfaces
import { ILandingPageProps } from './models';
import { IStore, IActionType } from '../../store/models';

// components
import { TVShowDetails } from '../../components';
import { EpisodesList } from '../EpisodesList';

class LandingPageComponent extends React.Component<ILandingPageProps> {
    componentDidMount = (): void => {
        const { onGetShowDetails } = this.props;
        onGetShowDetails();
    };

    render(): React.ReactNode {
        const { showDetails } = this.props;
        return (
            <div className="landing-page">
                <h1 className="landing-page__title"> Landing Page </h1>
                <div className="landing-page__show-details">
                    <TVShowDetails {...showDetails} />
                </div>
                <div className="landing-page__episodes-list">
                    <EpisodesList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        showDetails: state.showDetails,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, IActionType>) => {
    return {
        onGetShowDetails: () => dispatch(actions.getShowDetailsInit()),
    };
};

export const LandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPageComponent);
