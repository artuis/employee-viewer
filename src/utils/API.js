import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

const API = {
  xEmployees: function(resultCount) {
    return axios.get(
      "https://randomuser.me/api/?results=" + resultCount
    );
  }
};

export default API;