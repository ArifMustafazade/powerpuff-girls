// interfaces
import { IShowDetails, IEpisode } from '../common/models';

/** @store */
export interface IActionType {
    type: string;
    details?: IShowDetails;
    episodes?: IEpisode[];
    loading?: boolean;
    error?: boolean;
    errorMessage?: string;
    errorType?: string;
}

export interface IProperty<T> {
    [key: string]: string | boolean | T;
}

export interface IStore {
    showDetails: IDetailsState;
    episodesList: IEpisodesState;
}

export interface IDetailsState {
    details: IShowDetails;
    loading: boolean;
    error: boolean;
    errorMessage: string;
    errorType: string;
}

export interface IEpisodesState {
    episodes: IEpisode[];
    loading: boolean;
    error: boolean;
    errorMessage: string;
    errorType: string;
}
