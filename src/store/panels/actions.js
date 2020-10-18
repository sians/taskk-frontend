import panelsClient from "../../services/panelsService";

const REDUCER = "panels";
export const ACTION_TYPES = {
  GET_PANELS: `${REDUCER}/GET_PANELS`,
  GET_PANELS_SUCCESS: `${REDUCER}/GET_PANELS_SUCCESS`,
  GET_PANELS_FAIL: `${REDUCER}/GET_PANELS_FAIL`,
};

const getPanelsListing = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_PANELS
  });
  panelsClient
    .getPanels()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_PANELS_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_PANELS_FAIL,
        error: "Error getting panels "
      });
    });
};

export { getPanelsListing };
