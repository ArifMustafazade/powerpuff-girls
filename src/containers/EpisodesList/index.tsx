import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

// action types
import * as actions from '../../store/actions';

// interfaces
import { IEpisodesListProps } from './models';
import { IStore, IActionType } from '../../store/models';

// components
import { EpisodeListItem } from '../../components';

class EpisodesListComponent extends React.Component<IEpisodesListProps> {
    componentDidMount = (): void => {
        const { onGetEpisodesList } = this.props;
        onGetEpisodesList();
    };

    render(): React.ReactNode {
        const {
            episodesList: { episodes },
        } = this.props;
        return (
            <div className="episodes">
                <h2 className="episodes__title">Episodes List</h2>
                <div className="episodes__container">
                    {episodes?.map((episode) => (
                        <EpisodeListItem key={episode?.id} episode={episode} />
                    ))}
                </div>
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

export const EpisodesList = connect(mapStateToProps, mapDispatchToProps)(EpisodesListComponent);
