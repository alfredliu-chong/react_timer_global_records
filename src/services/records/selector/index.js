import { createSelector } from 'reselect'

export const getState = state => state.records

export const getData = createSelector(
    getState,
    state => state.data
)

export const getTopRecords = (page = 0, size = 10) => createSelector(
    getData,
    data => data.slice(page * size, (page + 1) * size)
)