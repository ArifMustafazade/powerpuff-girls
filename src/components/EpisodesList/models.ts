// interfaces
import { IEpisode } from '../../common/models';

/** @interfaces */
export interface IEpisodesListProps {
    episodes: IEpisode[];
    loading: boolean;
    error: boolean;
    errorMessage: string;
}
