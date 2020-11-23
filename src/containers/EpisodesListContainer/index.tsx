import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

// action types
import * as actions from '../../store/actions';

// interfaces
import { IEpisodesListContainerProps } from './models';
import { IStore, IActionType } from '../../store/models';

// components
import { EpisodesList } from '../../components';

class EpisodesListContainerComponent extends React.Component<IEpisodesListContainerProps> {
    componentDidMount = (): void => {
        const { onGetEpisodesList } = this.props;
        onGetEpisodesList();
    };

    render(): React.ReactNode {
        const { episodesList } = this.props;
        return (
            <div className="episodes">
                <h2 className="episodes__title">Episodes List</h2>
                <EpisodesList {...episodesList} />
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        episodesList: state.episodesList,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, IActionType>) => {
    return {
        onGetEpisodesList: () => dispatch(actions.getEpisodesListInit()),
    };
};

export const EpisodesListContainer = connect(mapStateToProps, mapDispatchToProps)(EpisodesListContainerComponent);
