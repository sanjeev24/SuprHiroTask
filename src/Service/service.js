import axios from "axios";
import { useSelector } from "react-redux";

//== Get without token API
const getDataWithOutToken = (ApiURL, endpoint) => {
  console.log("end point : ", endpoint);
  return new Promise((resolve, reject) => {
    axios
      .get(ApiURL + endpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

//== Get with token API
const getDataWithToken = (ApiURL, endpoint, token) => {
  // console.log("end point : ", endpoint);
  return new Promise((resolve, reject) => {
    axios
      .get(ApiURL + endpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
      // .then(response => response.json())
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

// == Post with token API
const postWithToken = (ApiURL, endpoint, data, authToken) => {
  console.log("URL ===>", ApiURL + endpoint);
  console.log(data);
  console.log(authToken);
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(ApiURL + endpoint, data, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    } catch (error) {
      reject("catch error found");
    }
  });
};

//== Post without token API
const postWithOutToken = (ApiURL, endpoint, data) => {
  console.log(ApiURL + endpoint, data);
  return new Promise((resolve, reject) => {
    axios
      .post(ApiURL + endpoint, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

const postWithOutTokenWithoutData = (ApiURL, endpoint) => {
  console.log(ApiURL + endpoint);
  return new Promise((resolve, reject) => {
    axios
      .post(
        ApiURL + endpoint,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

const postWithTokenWithoutData = (ApiURL, endpoint, authToken) => {
  console.log("URL ===>", ApiURL + endpoint);
  console.log(authToken);

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  console.log(config);
  return new Promise((resolve, reject) => {
    try {
      axios
        .post(ApiURL + endpoint, {}, config)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    } catch (error) {
      reject("catch error found");
    }
  });
};

const GetPayPalAccessKey = (url, data) => {
  console.log(url);
  console.log(data.client_id);

  const config = {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    auth: {
      username: data.client_id,
      password: data.secret,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(url, { grant_type: "client_credentials" }, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

const PayPalPaymentUrl = (url, data) => {
  console.log(url);
  console.log(data);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.access_token}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(url, data.data, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

const Final_PayPalPaymentUrl = (url, data) => {
  console.log(url);
  console.log(data);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.access_token}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(url, { payer_id: data.payer_id }, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export {
  getDataWithOutToken,
  getDataWithToken,
  postWithToken,
  postWithOutToken,
  postWithOutTokenWithoutData,
  postWithTokenWithoutData,
  GetPayPalAccessKey,
  PayPalPaymentUrl,
  Final_PayPalPaymentUrl,
};
