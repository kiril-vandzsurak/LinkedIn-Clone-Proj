export const GET_PEOPLE_DATA_TOP = "GET_PEOPLE_DATA_TOP";
export const GET_PEOPLE_DATA_BOTTOM = "GET_PEOPLE_DATA_BOTTOM";
export const PROFILE_DETAILS = "PROFILE_DETAILS";
export const GET_EXPERIENCE_DETAILS = "GET_EXPERIENCE_DETAILS";
export const SET_EXPERIENCE_POST = "SET_EXPERIENCE_POST";

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
};

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

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
  },
};
export const getProfile = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );
      if (response.ok) {
        const fetchedData = await response.json();
        console.log(fetchedData);
        dispatch({
          type: PROFILE_DETAILS,
          payload: fetchedData,
        });
      } else {
        console.log("error");
      }
    } catch (erro) {
      console.log("woohs nothing is found");
    }
  };
};

export const getExperienceAction = (userid) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userid +
          "/experiences/",
        options
      );
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: GET_EXPERIENCE_DETAILS,
          payload: fetchedData,
        });
      } else {
        console.log("error fetching experiences");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postExperienceAction = (experience, userid) => {
  const optionsPost = {
    method: "POST",
    body: JSON.stringify(experience),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userid +
          "/experiences/",
        optionsPost
      );
      if (response.ok) {
        console.log("Added successfully");
        dispatch(getExperienceAction(userid));
      } else {
        console.log("Couldn't post");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteExperienceAction = (postid, userid) => {
  const optionsDelete = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userid +
          "/experiences/" +
          postid,
        optionsDelete
      );
      if (response.ok) {
        console.log("Deleted successfully!");
        dispatch(getExperienceAction(userid));
      } else {
        console.log("Could not delete");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
