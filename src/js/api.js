import axios from "axios";

const axiosWrapper = {
  // GET
  get: function(endPoint, successCallback, errorCallback) {
    axios
      .get(process.env.API_URL + endPoint, { withCredentials: true })
      .then(response => {
        successCallback(response.data);
      })
      .catch(e => {
        errorCallback(e);
      });
  }
};

export default {
  settings: {
    // LOAD WE SETTINGS FOR THE CURRENT USER
    we: function(successCallback, errorCallback) {
      axiosWrapper.get("/api/we-settings", successCallback, errorCallback);
    },
    app: function(successCallback, errorCallback) {
      axiosWrapper.get("/api/settings", successCallback, errorCallback);
    }
  }
};
