import axios from "axios";

export const getDataProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
