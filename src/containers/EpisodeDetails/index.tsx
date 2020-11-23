import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// interfaces
import { IApiHandlerResponse } from '../../common/models';
import { IGetEpisodeByIdResponse } from '../../services/models';
import { IEpisodeDetailsProps, IEpisodeDetailsState } from './models';
import { IStore } from '../../store/models';

// services
import { getEpisodeById } from '../../services/tvmaze.service';

// components
import { EpisodeSummary } from '../../components';

class EpisodeDetailsComponent extends React.Component<IEpisodeDetailsProps, IEpisodeDetailsState> {
    state: IEpisodeDetailsState = {
        episode: null,
        error: false,
        loading: false,
    };

    /** @main */
    componentDidMount = (): void => {
        const {
            episodesList: { episodes },
            match: { params },
        } = this.props;
        // in case of direct url
        if (!episodes?.length) {
            this.getEpisodeInfo(+params?.id);
            return;
        }

        this.setState({
            episode: episodes?.find((episode) => episode?.id === +params?.id),
        });
    };

    getEpisodeInfo = async (id: number): Promise<void> => {
        this.setState({
            loading: true,
        });
        const getEpisodeByIdResponse: IApiHandlerResponse<IGetEpisodeByIdResponse> = await getEpisodeById(id);
        if (getEpisodeByIdResponse?.status) {
            this.setState({ episode: getEpisodeByIdResponse?.data, loading: false });
            return;
        }
        this.setState({ error: true, loading: false });
    };

    render(): React.ReactNode {
        const { episode } = this.state;
        return (
            <div className="episode-details">
                <h1 className="episode-details__title"> Episode Detail </h1>
                <div className="episode-details__summary">
                    <EpisodeSummary episode={episode} />
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

export const EpisodeDetails = withRouter(connect(mapStateToProps, null)(EpisodeDetailsComponent));
