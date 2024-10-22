import React, { useContext } from "react";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Search as Ss } from "tabler-icons-react";
import EventContext from "../../contexts/EventContext";
import EventAPI from "../../contexts/api/EventAPI";

function Search() {
	const { setEvents } = useContext(EventContext);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const handleSearch = (values) => {
		EventAPI.searchEvent(values.search).then((response) => {

			console.log(response.data);
			setEvents(response.data);
		});
	};

	const handleResetSearch = () => {
		form.reset();
		EventAPI.getEventData().then((response) => {
			setEvents(response.data);
		});
	};

	return (
		<Box sx={{ maxWidth: 300, opacity: 0.8, paddingTop: "10px" }} mx="auto">
			<form onSubmit={form.onSubmit((values) => handleSearch(values))}>
				<TextInput
					sx={{ border: "2px solid #557", borderRadius: "6px" }}
					required
					placeholder="Search events..."
					icon={<Ss size={14} />}
					{...form.getInputProps("search")}
				/>

				<Group position="right" mt="md">
					<Button
						variant="gradient"
						gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
						type="reset"
						onClick={handleResetSearch}
					>
						Reset
					</Button>
				</Group>
			</form>
		</Box>
	);
}

export default Search;
