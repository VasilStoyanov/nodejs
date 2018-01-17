export const RESOURCES_ACTIONS = {
    SEARCH: 'SEARCH_RESOURCES',
    SEARCH_FULFILLED: 'SEARCH_RESOURCES_FULFILLED',
    SEARCH_REJECTED: 'SEARCH_RESOURCES_REJECTED',
    
    GET_NAMES: 'GET_RESOURCES_NAMES',
    GET_NAMES_FULFILLED: 'GET_RESOURCES_NAMES_FULFILLED',
    GET_NAMES_REJECTED: 'GET_RESOURCES_NAMES_REJECTED',

    USER_INPUT_CHANGED: 'USER_INPUT_CHANGED',

    SWTICH_PAGE: 'SWTICH_PAGE'
};

export const PAGINATION_DELTA = 2;

export const URLS = {
    SEARCH: '/api/resources',
    GET_NAMES: '/api/resources/names',
};
