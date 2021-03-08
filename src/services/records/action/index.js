import { mockFetch } from "../../../util/mockFetch";
import { createAsyncAction } from "../../utils";

export const FETCH_DATA = createAsyncAction('data/fetch')

export const fetchData = (dispatch, getState) => mockFetch({
    types: FETCH_DATA
})(dispatch, getState)