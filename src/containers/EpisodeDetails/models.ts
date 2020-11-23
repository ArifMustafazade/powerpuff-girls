// interfaces
import { RouteComponentProps } from 'react-router-dom';
import { IEpisodesState } from '../../store/models';
import { IEpisode } from '../../common/models';

/** @interfaces */
export interface IEpisodeDetailsProps extends RouteComponentProps<{ id: string }> {
    episodesList: IEpisodesState;
}

export interface IEpisodeDetailsState {
    episode: IEpisode;
    error: boolean;
    errorMessage: string;
    loading: boolean;
}
