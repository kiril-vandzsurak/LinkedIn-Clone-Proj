export const GET_PEOPLE_DATA_TOP = "GET_PEOPLE_DATA_TOP";
export const GET_PEOPLE_DATA_BOTTOM = "GET_PEOPLE_DATA_BOTTOM"

export const retrieveDataActionTop = (endpoint, headers) => {
  const getRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return async (dispatch, getState) => {
    try {
      let response = await fetch(endpoint, headers, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjU1N2M5NmRmYjAwMTUyMWE1YmYiLCJpYXQiOjE2NzA4Mzc1OTEsImV4cCI6MTY3MjA0NzE5MX0.sionel4q5K1g2fRqRfazPcioEsiTmI5SAxk9wfavbhQ",
        },
      });
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_PEOPLE_DATA_TOP,
          payload: getRandom(fetchedData, 6),
        });
      } else {
        console.log("There was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export const retrieveDataActionBottom = (endpoint, headers) => {
  const getRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return async (dispatch, getState) => {
    try {
      let response = await fetch(endpoint, headers, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjU1N2M5NmRmYjAwMTUyMWE1YmYiLCJpYXQiOjE2NzA4Mzc1OTEsImV4cCI6MTY3MjA0NzE5MX0.sionel4q5K1g2fRqRfazPcioEsiTmI5SAxk9wfavbhQ",
        },
      });
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_PEOPLE_DATA_BOTTOM,
          payload: getRandom(fetchedData, 6),
        });
      } else {
        console.log("There was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
