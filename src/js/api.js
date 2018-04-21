import axios from "axios";

const axiosWrapper = {
  // GET
  get: function(endPoint, successCallback, errorCallback) {
    axios
      .get(endPoint, { withCredentials: true })
      .then(response => {
        successCallback(response.data);
      })
      .catch(e => {
        errorCallback(e);
      });
  }
};

export default {
  settings: function(successCallback, errorCallback) {
    axiosWrapper.get("/api/settings", successCallback, errorCallback);
  }
};
