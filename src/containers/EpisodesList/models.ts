// interfaces
import { IEpisodesState } from '../../store/models';

/** @interfaces */
export interface IEpisodesListProps {
    episodesList: IEpisodesState;
    onGetEpisodesList: () => void;
}
