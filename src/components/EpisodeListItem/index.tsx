import React from 'react';
import { Link } from 'react-router-dom';

// interfaces
import { IEpisodeListItemProps } from './models';

export const EpisodeListItem = (props: IEpisodeListItemProps): JSX.Element => {
    const { episode } = props;
    return (
        <Link className="episodes__episode" to={`/episodes/${episode?.id}`}>
            <p className="episodes__episode-season">{`Season: ${episode?.season}`}</p>
            <p className="episodes__episode-number">{`Number: ${episode?.number}`}</p>
        </Link>
    );
};
