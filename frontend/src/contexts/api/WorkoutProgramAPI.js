import axios from "axios";
import requestConfig from "./config";
import requestConfigJson from "./configJson";

const BASE_URL = `http://localhost:5000`;

class WorkoutProgramAPI {
	static getWorkoutProgramData() {
		return axios.get(`${BASE_URL}/workoutProgram/`, requestConfig);
	}

	static addWorkoutProgram(newWorkoutProgram) {
		return axios.post(`${BASE_URL}/workoutProgram/`, newWorkoutProgram, requestConfigJson);
	}

	static deleteWorkoutProgram(id) {
		return axios.delete(`${BASE_URL}/workoutProgram/${id}`, requestConfig);
	}

	static editWorkoutProgram(id, newWorkoutProgram) {
		return axios.put(`${BASE_URL}/workoutProgram/${id}`, newWorkoutProgram, requestConfigJson);
	}

	static searchWorkoutProgram(search) {
		return axios.get(`${BASE_URL}/workoutProgram/search/${search}`, requestConfigJson);
	}

	// Enroll WorkoutProgram
	static enrollWorkoutProgram(data) {
		return axios.post(`${BASE_URL}/user/enroll`, data, requestConfigJson);
	}

	// Unenroll WorkoutProgram
	static unenrollWorkoutProgram(data) {
		return axios.post(`${BASE_URL}/user/unenroll`, data, requestConfigJson);
	}

	// Get enrolled WorkoutPrograms
	static getEnrolledWorkoutPrograms(userID) {
		return axios.get(`${BASE_URL}/user/enrolledWorkoutPrograms/${userID}`, requestConfig);
	}

	// getAllWorkoutProgramsWithTotalRevenue
	static getAllWorkoutProgramsWithTotalRevenue() {
		return axios.get(`${BASE_URL}/getAllWorkoutProgramsWithTotalRevenue`, requestConfig);
	}

	static getWorkoutRecommendationsByBMI(category) {
		return axios.get(`${BASE_URL}/getWorkoutRecommendationsByBMI/?category=${category}`)
	}
}

export default WorkoutProgramAPI;
