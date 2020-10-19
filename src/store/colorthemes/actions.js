import colorthemesClient from "../../services/colorthemesService";

const REDUCER = "colorthemes";
export const ACTION_TYPES = {
  GET_COLORTHEMES: `${REDUCER}/GET_COLORTHEMES`,
  GET_COLORTHEMES_SUCCESS: `${REDUCER}/GET_COLORTHEMES_SUCCESS`,
  GET_COLORTHEMES_FAIL: `${REDUCER}/GET_COLORTHEMES_FAIL`,
};

const getColorthemesListing = (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_COLORTHEMES
  });
  colorthemesClient
    .getColorthemes()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_COLORTHEMES_SUCCESS,
          payload: res.data,
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_COLORTHEMES_FAIL,
        error: "Error getting Colorthemes"
      });
    });
};

export { getColorthemesListing };
