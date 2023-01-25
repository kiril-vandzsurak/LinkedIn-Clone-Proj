export const GET_PEOPLE_DATA_TOP = "GET_PEOPLE_DATA_TOP";
export const GET_PEOPLE_DATA_BOTTOM = "GET_PEOPLE_DATA_BOTTOM";
export const PROFILE_DETAILS = "PROFILE_DETAILS";
export const OTHER_USER_DETAILS = "OTHER_USER_DETAILS";
export const GET_EXPERIENCE_DETAILS = "GET_EXPERIENCE_DETAILS";
export const EXP_TO_EDIT = "EDIT_EXPERIENCE_DETAILS";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_POST_DATA = "GET_POST_DATA";
export const GET_EXPERIENCE_DETAILS_OTHER = "GET_EXPERIENCE_DETAILS_OTHER";
export const MAKE_POST = "MAKE_POST";

export const getPostsAction = () => {
  console.log('getPostsAction is called')
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOADING",
        payload: true
      })
      let response = await fetch(
        "http://localhost:3002/posts/",
      );
      console.log("This is the response", response)
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_POST_DATA,
          payload: fetchedData
        });
        setTimeout(() => {
          dispatch({
              type: "LOADING",
              payload: false
          })
      }, 300)
        console.log(fetchedData);
      } else {
        console.log("There was an error fetching posts");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProfile = (changeVaules) => {
  const option = {
    method: "PUT",
    body: JSON.stringify(changeVaules),

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        option
      );
      if (response.ok) {
        console.log(response);
      } else {
        console.log("error");
      }
    } catch (erro) {
      console.log("woohs nothing is found");
    }
  };
};

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
        "http://localhost:3002/users/63d0ead852fdda0791edb93d/"
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

export const getOtherProfile = (userid) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userid,
        options
      );
      if (response.ok) {
        const fetchedData = await response.json();
        console.log(fetchedData);
        dispatch({
          type: OTHER_USER_DETAILS,
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

export const getExperienceOtherAction = (userid) => {
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
          type: GET_EXPERIENCE_DETAILS_OTHER,
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
        dispatch(getExperienceAction(userid));
        console.log("Deleted successfully!");
      } else {
        console.log("Could not delete");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getExperienceEdit = (postid, userid) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userid +
          "/experiences/" +
          postid,
        options
      );
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: EXP_TO_EDIT,
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

export const editExperienceAction = (postid, userid, data) => {
  const optionsEdit = {
    method: "PUT",
    body: JSON.stringify(data),
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
        optionsEdit
      );
      if (response.ok) {
        dispatch(getExperienceAction(userid));
        console.log("ok!");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const makePostAction = (data, userid) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      "Content-Type": "application/json",
    },
  };
  return async (dispatch, useState) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        options
      );
      if (response.ok) {
        dispatch(getPostsAction());
        console.log("Posted Successfully!");
      } else {
        console.log("Error posting");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePostAction = (postid) => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postid,
        options
      );
      if (response.ok) {
        console.log("Deleted Successfully!");
        dispatch(getPostsAction());
      } else {
        console.log("Couldn't delete post");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const editPostAction = (postid, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postid,
        options
      );
      if (response.ok) {
        console.log("Edited post");
        dispatch(getPostsAction());
      } else {
        console.log("Couldn't edit post");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
