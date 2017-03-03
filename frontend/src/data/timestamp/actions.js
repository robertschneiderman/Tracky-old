export const REQUEST_TIMESTAMPS = 'REQUEST_TIMESTAMPS';
export const REQUEST_TIMESTAMP = 'REQUEST_TIMESTAMP';
export const CREATE_TIMESTAMP = 'CREATE_TIMESTAMP';
export const UPDATE_TIMESTAMP = 'UPDATE_TIMESTAMP';
export const FINISH_TIMESTAMP = 'FINISH_TIMESTAMP';
export const DESTROY_TIMESTAMP = 'DESTROY_TIMESTAMP';
export const RECEIVE_TIMESTAMPS = 'RECEIVE_TIMESTAMPS';
export const MERGE_TIMESTAMPS = 'MERGE_TIMESTAMPS';
export const RECEIVE_TIMESTAMP = 'RECEIVE_TIMESTAMP';
export const REMOVE_TIMESTAMP = 'REMOVE_TIMESTAMPS';
export const TIMESTAMP_ERROR = 'TIMESTAMP_ERROR';

export const requestTimestamps = () => ({
    type: REQUEST_TIMESTAMPS,
});

export const requestTimestamp = id => ({
    type: REQUEST_TIMESTAMP,
    id
});

export const receiveTimestamps = timestamps => ({
    type: RECEIVE_TIMESTAMPS,
    timestamps
});

export const mergeTimestamps = timestamps => ({
    type: MERGE_TIMESTAMPS,
    timestamps
});

export const receiveTimestamp = timestamp => ({
    type: RECEIVE_TIMESTAMP,
    timestamp
});

export const removeTimestamp = timestamp => ({
    type: REMOVE_TIMESTAMP,
    timestamp
});

export const createTimestamp = timestamp => ({
    type: CREATE_TIMESTAMP,
    timestamp
});

export const finishTimestamp = timestamp => ({
    type: FINISH_TIMESTAMP,
    timestamp
});

export const updateTimestamp = (id, timestamp) => ({
    type: UPDATE_TIMESTAMP,
    id,
    timestamp
});

export const destroyTimestamp = timestamp => ({
    type: DESTROY_TIMESTAMP,
    timestamp
});

export const timestampError = error => ({
    type: TIMESTAMP_ERROR,
    error
});
