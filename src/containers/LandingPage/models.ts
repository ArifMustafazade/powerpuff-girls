// interfaces
import { IDetailsState } from '../../store/models';

/** @interfaces */
export interface ILandingPageProps {
    showDetails: IDetailsState;
    onGetShowDetails: () => void;
}
