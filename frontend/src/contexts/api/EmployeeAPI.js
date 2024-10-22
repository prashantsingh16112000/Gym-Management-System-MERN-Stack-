import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `http://localhost:5000`;

class UserAPI {
	static EmployeeLogin(values) {
		return axios.post(`${BASE_URL}/user/login/`, values, requestConfigJson);
	}

	static EmployeeRegister(values) {
		return axios.post(`${BASE_URL}/user/register/`, values, requestConfigJson);
	}

	static getEmployeeData(id) {
		return axios.get(`${BASE_URL}/user/${id}`, requestConfigJson);
	}

	static getEmployees() {
		return axios.get(`${BASE_URL}/employee/`, requestConfig);
	}

	static deleteEmployee(id) {
		return axios.delete(`${BASE_URL}/user/${id}`, requestConfig);
	}

	static editEmployee(id, newEmployee) {
		return axios.put(`${BASE_URL}/user/${id}`, newEmployee, requestConfigJson);
	}

	static searchEmployee(search) {
		return axios.get(`${BASE_URL}/employee/search/${search}`, requestConfigJson);
	}
}

export default UserAPI;
