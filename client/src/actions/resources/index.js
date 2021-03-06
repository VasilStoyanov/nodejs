import { RESOURCES_ACTIONS } from '../../constants/ResourcesConstants';

export const searchResources = (topicId, thematicId, searchQuery) => ({
  type: RESOURCES_ACTIONS.SEARCH,
  payload: { topicId, thematicId, searchQuery },
});

export const searchResourcesFulfilled = data => ({
  type: RESOURCES_ACTIONS.SEARCH_FULFILLED,
  payload: data,
});

export const searchResourcesRejected = error => ({
  type: RESOURCES_ACTIONS.SEARCH_REJECTED,
  payload: error,
});

export const getResourcesNames = (topicId, thematicId) => ({
  type: RESOURCES_ACTIONS.GET_NAMES,
  payload: { topicId, thematicId },
});

export const getResourcesNamesFulfilled = data => ({
  type: RESOURCES_ACTIONS.GET_NAMES_FULFILLED,
  payload: data,
});

export const getResourcesNamesRejected = error => ({
  type: RESOURCES_ACTIONS.GET_NAMES_REJECTED,
  payload: error,
});

export const userInputChange = searchQuery => ({
  type: RESOURCES_ACTIONS.USER_INPUT_CHANGED,
  payload: searchQuery,
});

export const searchInputChangeFulfilled = searchQuery => ({
  type: RESOURCES_ACTIONS.USER_INPUT_CHANGED_FULFILLED,
  payload: searchQuery,
});

export const switchPage = pageNumber => ({
  type: RESOURCES_ACTIONS.SWTICH_PAGE,
  payload: pageNumber,
});
