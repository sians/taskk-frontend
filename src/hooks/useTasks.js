import { useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { actions, selectors } from "../store/tasks";

const useTasks = (taskId) => {
    const dispatch = useDispatch();
    const { getTasksListing, updateTask } = actions;

    const { 
        getTasks, 
        getLoading, 
        getError, 
        getLoaded,
        makeGetTask,
        getUpdateTaskLoading,
        getUpdateTaskSuccess,
        getUpdateTaskError
    } = selectors;

    // L I S T
    const error = useSelector(state => getError(state));
    const loading = useSelector(state => getLoading(state));
    const loaded = useSelector(state => getLoaded(state));

    const tasks = useSelector(state => getTasks(state));

    useEffect(() => {
        if (!loaded && !loading && !taskId) {
            getTasksListing(dispatch);
        }
    }, [dispatch, getTasksListing, loaded, loading]);


    // S H O W
    const makeTask = useMemo(makeGetTask, []);
    const task = useSelector(state =>
        makeTask(state, taskId)
    );

    // U P D A T E
    const updateTaskLoading = useSelector(
        state => getUpdateTaskLoading(state),
        shallowEqual
    );
    const updateTaskSuccess = useSelector(
        state => getUpdateTaskSuccess(state),
        shallowEqual
    );
    const updateTaskError = useSelector(
        state => getUpdateTaskError(state),
        shallowEqual
    );

    const dispatchUpdateTask = useCallback(
        (id, payload) => {
            updateTask(dispatch, id, payload);
        },
        [dispatch, updateTask]
    )

    return {
        tasks,
        task,
        error,
        loaded,
        loading,
        updateTaskLoading,
        updateTaskSuccess,
        updateTaskError,
        updateTask: dispatchUpdateTask
    };
};

export default useTasks;
