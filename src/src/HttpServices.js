// import axios from 'axios';
// import { env } from './env'

// const BASE_URL = env.baseUrl
const BASE_URL = "http://pardu.in/"

const tokenSetup = () => {
    const loggedInUserData = JSON.parse(localStorage.getItem('userData'));
    if (loggedInUserData) {
        if (loggedInUserData.Token) {
            axios.defaults.headers['ApplicationSecurityCode'] = loggedInUserData.ApplicationSecurityCode;
            axios.defaults.headers.common['SECURIT_IDENTITY'] = loggedInUserData.Token;
        }
    }
}

export const httpServices = { postData, getData, putData, deleteData }

function postData(url, payLoad) {
    tokenSetup()
    return axios.post(`${BASE_URL}${url}`, payLoad);
}

function getData(url) {
    tokenSetup()
    return axios.get(`${BASE_URL}${url}`);
}

function putData(url, payLoad) {
    tokenSetup()
    return axios.put(`${BASE_URL}${url}`, payLoad);
}

function deleteData(url) {
    tokenSetup()
    return axios.delete(`${BASE_URL}${url}`);
}


// Post data
httpServices
  .postData("Api/User/UpdateUser", values)
  .then((data) => {
	setErrors({});
	if (data.data || data.data === "") {
	  localStorage.removeItem("allUsers");
	  setValues(intialValues);
	  setErrors({});
	  setShowToaster(true);
	  setUserUpdated(true);
	  setLoading(false);
	  localStorage.removeItem("editUserData");
	  localStorage.setItem("updated", true);
	  history.push("/users");
	}
})

httpServices
  .postData("Api/User/InsertUser", values)
  .then((data) => {
	setLoading(false);
	if (data.data || data.data === "") {
	  localStorage.removeItem("allUsers");
	  setValues(intialValues);
	  setErrors({});
	  setShowToaster(true);
	  localStorage.setItem("added", true);
	  history.push("/users");
	}
  })
  .catch((e) => {
	console.log(e);
	setLoading(false);
});

// Get data
httpServices.getData(`Api/Chart/GetData?date=${moment(startDate).format("L")}`)
  .then(
	(data) => {
	  setLoading(false);
	  setTaskData(data.data);
	},
	(err) => {
	  setLoading(false);
	  setError(true)
	  console.log(err);
	}
);