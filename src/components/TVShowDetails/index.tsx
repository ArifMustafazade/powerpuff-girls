import React from 'react';
import sanitizeHtml from 'sanitize-html';

// interfaces
import { ITVShowDetailsProps } from './models';

export const TVShowDetails = (props: ITVShowDetailsProps): JSX.Element => {
    console.log('props: ', props);
    const { details } = props;

    return (
        <div className="details">
            <h2 className="details__title">{details?.name}</h2>
            <div className="details__info-container">
                <div className="details__image-container">
                    <img className="details__cover-image" src={details?.image?.medium} alt="TV show cover image" />
                </div>
                {/* for some reason API send markup, therefore it has to be sanitized */}
                <div
                    className="details__description"
                    dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(details?.summary),
                    }}
                />
            </div>
        </div>
    );
};
