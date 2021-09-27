import axios from "axios";

const url = "https://coronavirus-19-api.herokuapp.com/countries";
const url3 = "https://api.worldbank.org/v2/country?format=json";

//COVID APIs
export const worldcase = () => axios.get(url);
export const cases = (country) => axios.get(`${url}/${country}`);
export const flag = () => axios.get(url3);
