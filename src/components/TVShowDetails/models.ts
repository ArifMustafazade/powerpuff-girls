// interfaces
import { IShowDetails } from '../../common/models';

/** @interfaces */
export interface ITVShowDetailsProps {
    details: IShowDetails;
    error: boolean;
    errorMessage: string;
    loading: boolean;
}
