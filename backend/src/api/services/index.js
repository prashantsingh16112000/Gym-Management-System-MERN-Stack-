import { insertSample, getAllSamples, getOneSample, updateSample, deleteSample, searchSamples } from "./Sample.service";

import {
	insertWorkoutProgram,
	getAllWorkoutPrograms,
	getOneWorkoutProgram,
	updateWorkoutProgram,
	deleteWorkoutProgram,
	searchWorkoutPrograms,
	getTotalRevenue,
	getWorkoutRecommendations
} from "./WorkoutProgram.service";

import {
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,
} from "./TrainerBD.service";

import {
	insertPersonalTrainerReq,
	getAllPersonalTrainerReq,
	getOnePersonalTrainerReq,
	updatePersonalTrainerReq,
	deletePersonalTrainerReq,
	searchPersonalTrainerReq,
} from "./PersonalTrainerReq.service";

import {
	insertSalary,
	updateSalary,
	getAllSalaries,
	getOneSalary,
	searchSalaries,
	getOneEmployeeSalary,
} from "./Salary.service";

import {
	authenticateUser,
	insertUser,
	getAllEnrolledWorkoutPrograms,
	enrollUserToWorkoutProgram,
	unenrollUserFromWorkoutProgram,
	getMembersEmailList,
	getTrainersEmailList,
	getAdminsEmailList,
	getEmployeesEmailList,
	deleteUser,
	getUserDetails,
	getAllEmployees,
	updateUser,
	searchUsersMember,
	getAllEnrolledWorkoutProgramsForAllUsers,
} from "./User.service";

import {
	insertWorkoutScR,
	updateWorkoutScR,
	deleteWorkoutScR,
	getAllWorkoutScR,
	getOneWorkoutScR,
} from "./WorkoutScR.service";

import {
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateworkout,
	deleteWorkout,
	searchWorkouts,
	increaseViewCount,
	getAllWorkoutsOrderByViewCount,
} from "./Workout.service";

import { insertNotice, getAllNotices, getOneNotice, updateNotice, deleteNotice } from "./Notice.service";

import { insertQuestion, updateQuestion, deleteQuestion, getAllQuestions, searchQuestions } from "./Question.service";

import { updateEvents, deleteEvents, createEvents, getEvent, getEvents } from "./Event.service";

import { getTrainer, updateTrainers, deleteTrainers, getTrainers, createTrainers } from "./Trainer.service";

import { getEmployee, updateEmployees, deleteEmployees, getEmployees, createEmployees } from "./Employee.service";

import { insertFeedback, getAllFeedbacks, updateFeedback, searchFeedbacks } from "./Feedback.service";

export default {
	// Sample services
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	// Workout Program services
	insertWorkoutProgram,
	getAllWorkoutPrograms,
	getOneWorkoutProgram,
	updateWorkoutProgram,
	deleteWorkoutProgram,
	searchWorkoutPrograms,
	getTotalRevenue,
	getWorkoutRecommendations,

	// Workout Services
	insertWorkoutScR,
	updateWorkoutScR,
	deleteWorkoutScR,
	getAllWorkoutScR,
	getOneWorkoutScR,

	//question services
	insertQuestion,
	updateQuestion,
	deleteQuestion,
	getAllQuestions,
	searchQuestions,

	//Blog services
	insertTrainerBD,
	getAllTrainerBD,
	getOneTrainerBD,
	updateTrainerBD,
	deleteTrainerBD,

	//salary services
	insertSalary,
	updateSalary,
	getAllSalaries,
	getOneSalary,
	searchSalaries,
	getOneEmployeeSalary,

	// User services
	authenticateUser,
	insertUser,
	getAllEnrolledWorkoutPrograms,
	enrollUserToWorkoutProgram,
	unenrollUserFromWorkoutProgram,
	getMembersEmailList,
	getTrainersEmailList,
	getAdminsEmailList,
	getEmployeesEmailList,
	deleteUser,
	getUserDetails,
	getAllEmployees,
	updateUser,
	searchUsersMember,
	getAllEnrolledWorkoutProgramsForAllUsers,

	// Workout services
	insertWorkout,
	getAllWorkouts,
	getOneWorkout,
	updateworkout,
	deleteWorkout,
	searchWorkouts,
	increaseViewCount,
	getAllWorkoutsOrderByViewCount,

	//Notice Services
	insertNotice,
	getAllNotices,
	getOneNotice,
	updateNotice,
	deleteNotice,

	// Event services
	getEvent,
	getEvents,
	updateEvents,
	deleteEvents,
	createEvents,

	//PersonalRequest services
	insertPersonalTrainerReq,
	getAllPersonalTrainerReq,
	getOnePersonalTrainerReq,
	updatePersonalTrainerReq,
	deletePersonalTrainerReq,
	searchPersonalTrainerReq,

	//Feedback services
	insertFeedback,
	getAllFeedbacks,
	updateFeedback,
	searchFeedbacks,

	// Trainer services
	getTrainer,
	updateTrainers,
	deleteTrainers,
	getTrainers,
	createTrainers,

	//Employee services
	getEmployee,
	updateEmployees,
	deleteEmployees,
	getEmployees,
	createEmployees,
};
