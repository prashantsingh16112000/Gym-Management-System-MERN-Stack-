import { createContext, useState, useEffect } from "react";

// Mantine imports
import { Text } from "@mantine/core";
import { useForm, joiResolver } from "@mantine/form";
import { useModals } from "@mantine/modals";

import PersonalTrainerRequestAPI from "./api/PersonalTrainerRequestAPI";
import Joi from "joi";

const PersonalTrainerRequestContext = createContext();

export function PersonalTrainerRequestProvider({ children }) {
	// Form Validation
	const schema = Joi.object({
		name: Joi.string().max(50).message(" Name should be between 4 and 50 characters"),
		perTrainer: Joi.string().required(),
		timeSlot: Joi.string().required(),
		TrainDay: Joi.string().required(),
		package: Joi.string().required(),
		status: Joi.string().required(),
	});
	const [requests, setRequests] = useState([]);

	const [request, setRequest] = useState({
		name: "",
		perTrainer: "",
		timeSlot: "",
		TrainDay: "",
		package: "",
		status: "",
	});

	const form = useForm({
		schema: joiResolver(schema),
		initialValues: {
			name: "",
			perTrainer: "",
			timeSlot: "",
			TrainDay: "",
			package: "",
			status: "",
		},
	});

	// Get all  Request
	useEffect(() => {
		PersonalTrainerRequestAPI.getRequestData().then((response) => {
			setRequests(response.data);
		});
	}, []);

	// Add new  request
	const addRequest = (values) => {
		const currentDate = new Date();
		const currentMonthIndex = currentDate.getMonth();
		const monthNames = [
			"january", "february", "march", "april", "may", "june",
			"july", "august", "september", "october", "november", "december"
		];
		const currentMonth = monthNames[currentMonthIndex];

		const newRequest = {
			name: values.name,
			perTrainer: values.perTrainer,
			timeSlot: values.timeSlot,
			TrainDay: values.TrainDay,
			package: values.package,
			status: values.status,
			monthAdded: currentMonth
		};

		PersonalTrainerRequestAPI.addRequest(newRequest).then((response) => {
			setRequests([...requests, response.data]);
			form.reset();
		});
	};


	//2022-5-13

	// Delete Request and update UI
	const deleteRequest = (id) => {
		PersonalTrainerRequestAPI.deleteRequest(id).then(() => {
			setRequests(requests.filter((requests) => requests._id !== id));
		});
	};

	// Delete confirmation modal
	const modals = useModals();
	const confirmDelete = (id) =>
		modals.openConfirmModal({
			title: "Delete Request",
			centered: true,
			children: (
				<Text size="sm">
					Are you sure you want to delete this Request? This action is destructive and cannot be undone.
				</Text>
			),
			labels: {
				confirm: "Delete Request",
				cancel: "No don't delete it",
			},
			confirmProps: { color: "red" },

			onCancel: () => console.log("Cancel"),
			onConfirm: () => deleteRequest(id),
		});

	// Edit Request
	const editRequest = (values) => {
		const newRequest = {
			//workout_name: values.workout_name,
			name: values.name,
			perTrainer: values.perTrainer,
			timeSlot: values.timeSlot,
			TrainDay: values.TrainDay,
			package: values.package,
			status: values.status,
		};
		PersonalTrainerRequestAPI.editRequest(values.id, newRequest).then((response) => {
			setRequests(requests.map((requests) => (requests._id === values.id ? response.data : requests)));
			form.reset();
		});
	};

	// editBlog Modal
	const [editOpened, setEditOpened] = useState(false);

	return (
		<PersonalTrainerRequestContext.Provider
			value={{
				requests,
				request,
				addRequest,
				form,
				setRequest,
				setRequests,
				confirmDelete,
				editRequest,
				deleteRequest,
				setEditOpened,
				editOpened,
			}}
		>
			{children}
		</PersonalTrainerRequestContext.Provider>
	);
}

export default PersonalTrainerRequestContext;
