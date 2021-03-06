import React from 'react';
import sanitizeHtml from 'sanitize-html';

// interfaces
import { IEpisodeSummaryProps } from './models';

// components
import { NoImage, Spinner, ApiError } from '../';

export const EpisodeSummary = (props: IEpisodeSummaryProps): JSX.Element => {
    const { episode, loading, error, errorMessage } = props;
    return (
        <div className="episode__summary">
            {loading && <Spinner />}
            {!loading && error && <ApiError errorMessage={errorMessage} />}
            {!loading && !error && (
                <>
                    <h2 className="episode__summary__title">{episode?.name}</h2>
                    <div className="episode__summary__info-container">
                        <div className="episode__summary__image-container">
                            {episode?.image ? (
                                <img
                                    className="episode__summary__cover-image"
                                    src={episode?.image?.medium}
                                    alt="Episode cover image"
                                />
                            ) : (
                                <NoImage />
                            )}
                        </div>
                        {/* for some reason API send markup, therefore it has to be sanitized */}
                        <div
                            className="episode__summary__description"
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHtml(episode?.summary),
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};
