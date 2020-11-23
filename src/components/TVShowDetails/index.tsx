import React from 'react';
import sanitizeHtml from 'sanitize-html';

// interfaces
import { ITVShowDetailsProps } from './models';

// components
import { Spinner, ApiError } from '../';

export const TVShowDetails = (props: ITVShowDetailsProps): JSX.Element => {
    const { details, loading, error, errorMessage } = props;
    return (
        <div className="details">
            <h2 className="details__title">{details?.name}</h2>
            <div className="details__info-container">
                {loading && <Spinner />}
                {!loading && error && <ApiError errorMessage={errorMessage} />}
                {!loading && !error && (
                    <>
                        <div className="details__image-container">
                            <img
                                className="details__cover-image"
                                src={details?.image?.medium}
                                alt="TV show cover image"
                            />
                        </div>
                        {/* for some reason API send markup, therefore it has to be sanitized */}
                        <div
                            className="details__description"
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHtml(details?.summary),
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
