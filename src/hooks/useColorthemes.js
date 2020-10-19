import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "../store/colorthemes";

const useColorthemes = (colorthemeId) => {
    const dispatch = useDispatch();
    const { getColorthemesListing } = actions;

    const { 
        getColorthemes, 
        getLoading, 
        getError, 
        getLoaded,
        makeGetColortheme
    } = selectors;

    const error = useSelector(state => getError(state));
    const loading = useSelector(state => getLoading(state));
    const loaded = useSelector(state => getLoaded(state));

    const colorthemes = useSelector(state => getColorthemes(state));

    useEffect(() => {
        if (!loaded && !loading && !colorthemeId) {
            getColorthemesListing(dispatch);
        }
    }, [dispatch, getColorthemesListing, loaded, loading]);

    const makeColortheme = useMemo(makeGetColortheme, []);
    const colortheme = useSelector(state =>
        makeColortheme(state, colorthemeId)
    );

    return {
        colorthemes,
        colortheme,
        error,
        loaded,
        loading
    };
};

export default useColorthemes;
