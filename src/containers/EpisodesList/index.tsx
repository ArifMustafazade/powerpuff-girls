import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

// action types
import * as actions from '../../store/actions';

// interfaces
import { IEpisodesListProps, IEpisodesListState } from './models';
import { IStore, IActionType } from '../../store/models';

class EpisodesListComponent extends React.Component<IEpisodesListProps, IEpisodesListState> {
    componentDidMount = (): void => {
        const { onGetEpisodesList } = this.props;
        onGetEpisodesList();
    };

    render(): React.ReactNode {
        return (
            <div className="episodes">
                <h2 className="episodes__title">Episodes List</h2>
                <div className="episodes__container"></div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        episodes: state.episodes,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, IActionType>) => {
    return {
        onGetEpisodesList: () => dispatch(actions.getEpisodesListInit()),
    };
};

export const EpisodesList = connect(mapStateToProps, mapDispatchToProps)(EpisodesListComponent);
