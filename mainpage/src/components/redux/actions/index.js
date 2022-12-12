export const GET_PEOPLE_DATA = "GET_PEOPLE_DATA";

export const retrieveDataAction = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjU1N2M5NmRmYjAwMTUyMWE1YmYiLCJpYXQiOjE2NzA4Mzc1OTEsImV4cCI6MTY3MjA0NzE5MX0.sionel4q5K1g2fRqRfazPcioEsiTmI5SAxk9wfavbhQ",
          },
        }
      );
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_PEOPLE_DATA,
          payload: fetchedData,
        });
      } else {
        console.log("There was a problem fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
