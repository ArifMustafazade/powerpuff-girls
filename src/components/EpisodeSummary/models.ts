// interface
import { IEpisode } from '../../common/models';

/** @interfaces */

export interface IEpisodeSummaryProps {
    episode: IEpisode;
    loading: boolean;
    error: boolean;
    errorMessage: string;
}
