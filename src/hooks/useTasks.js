import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "../store/tasks";

const useTasks = (taskId) => {
    const dispatch = useDispatch();
    const { getTasksListing } = actions;

    const { 
        getTasks, 
        getLoading, 
        getError, 
        getLoaded,
        makeGetTask
    } = selectors;

    const error = useSelector(state => getError(state));
    const loading = useSelector(state => getLoading(state));
    const loaded = useSelector(state => getLoaded(state));

    const tasks = useSelector(state => getTasks(state));

    useEffect(() => {
        if (!loaded && !loading && !taskId) {
            getTasksListing(dispatch);
        }
    }, [dispatch, getTasksListing, loaded, loading]);

    const makeTask = useMemo(makeGetTask, []);
    const task = useSelector(state =>
        makeTask(state, taskId)
    );

    return {
        tasks,
        task,
        error,
        loaded,
        loading
    };
};

export default useTasks;
