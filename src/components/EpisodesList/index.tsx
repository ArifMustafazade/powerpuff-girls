import React from 'react';

// interfaces
import { IEpisodesListProps } from './models';

// components
import { EpisodeListItem, Spinner, ApiError } from '../../components';

export const EpisodesList = (props: IEpisodesListProps): JSX.Element => {
    const { loading, error, episodes, errorMessage } = props;

    return (
        <>
            {loading && <Spinner />}
            {!loading && error && <ApiError errorMessage={errorMessage} />}
            {!loading && !error && (
                <div className="episodes__container">
                    {episodes?.map((episode) => (
                        <EpisodeListItem key={episode?.id} episode={episode} />
                    ))}
                </div>
            )}
        </>
    );
};
