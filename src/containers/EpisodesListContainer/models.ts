// interfaces
import { IEpisodesState } from '../../store/models';

/** @interfaces */
export interface IEpisodesListContainerProps {
    episodesList: IEpisodesState;
    onGetEpisodesList: () => void;
}
