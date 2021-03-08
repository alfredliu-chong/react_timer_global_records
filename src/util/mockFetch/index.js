import { data } from "components/Record/data";

// Util
export const mockFetch = (options) => async (dispatch, getState) => {
  const { types } = options
  if (types && types['REQUEST']) {
    dispatch({
      type: types.REQUEST,
    })
  }

  return new Promise((resolve, reject) => {
    const timeout = () => {
      const error = new Error(
        "We're having trouble retrieving that, please try again later"
      );
      error.code = 500;
      const randomDigit = Math.floor(Math.random() * 11);

      if (randomDigit >= 3) {
        if (types && types['SUCCESS']) {
          dispatch({
            type: types.SUCCESS,
            payload: data
          })
        }
        resolve(data)
      } else {
        if (types && types['FAILURE']) {
          dispatch({
            type: types.FAILURE,
            error
          })
        }
        reject(error)
      }
    };

    // Return promise after timeout
    setTimeout(timeout, 2000);
  });
}
