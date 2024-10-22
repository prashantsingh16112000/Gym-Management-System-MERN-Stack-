import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `http://localhost:5000`;

class TrainerAPI {
	static login(values) {
		return axios.post(`${BASE_URL}/user/login/`, values, requestConfigJson);
	}

	static register(values) {
		return axios.post(`${BASE_URL}/trainer/register/`, values, requestConfigJson);
	}

	static getTrainerData(id) {
		return axios.get(`${BASE_URL}/trainer/${id}`, requestConfigJson);
	}

	static getTrainers() {
		return axios.get(`${BASE_URL}/trainer/`, requestConfigJson);
	}

	static deleteTrainer(id) {
		return axios.delete(`${BASE_URL}/trainer/${id}`, requestConfigJson);
	}

	static updateTrainer(id, trainer) {
		return axios.put(`${BASE_URL}/trainer/${id}`, trainer, requestConfigJson);
	}
}

export default TrainerAPI;
