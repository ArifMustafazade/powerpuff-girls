/** @interfaces */

export interface IApiHandlerResponse<T> {
    status: boolean;
    errorType?: string;
    errorMessage?: string;
    data?: T;
}

interface ILink {
    href: string;
}

interface INetwork {
    id: number;
    name: string;
    country: {
        name: string;
        code: string;
        timezone: string;
    };
}

export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    _links: {
        self: ILink;
    };
}

export interface IShowDetails {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string;
    schedule: {
        time: string;
        days: string[];
    };
    rating: {
        average: number;
    };
    weight: number;
    network: INetwork;
    webChannel: string;
    externals: {
        tvrage: number;
        thetvdb: number;
        imdb: string;
    };
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    updated: number;
    _links: {
        self: ILink;
        previousepisode: ILink;
    };
}
