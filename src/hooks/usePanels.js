import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "../store/panels";

const usePanels = () => {
  const dispatch = useDispatch();
  const { getPanelsListing } = actions;

  const { getPanels, getLoading, getError, getLoaded } = selectors;

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state));
  const loaded = useSelector(state => getLoaded(state));

  const panels = useSelector(state => getPanels(state));

  useEffect(() => {
    if (!loaded && !loading) {
      getPanelsListing(dispatch);
    }
  }, [dispatch, getPanelsListing, loaded, loading]);

  return {
    panels,
    error,
    loaded,
    loading
  };
};

export default usePanels;
