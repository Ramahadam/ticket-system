import { supabase } from "./supabase";

export async function getChangeRequests() {
	let query = supabase.from("change_requests").select("*");

	const { data: changeRequests, error } = await query;

	if (error) {
		console.error(error.message);
		throw new Error(`Couldn't load change requests data ${error.message}`);
	}

	return changeRequests;
}

export async function getChangeRequest(id) {
	let { data: changeRequest, error } = await supabase
		.from("change_requests")
		.select("*")
		.eq("id", id);

	if (error) {
		console.error(error);
		throw new Error("Could't load Change requests data");
	}

	return changeRequest;
}

// export async function createIncident(incident) {
// 	const fileName = `${Math.random()}-${incident?.file?.name}`.replaceAll(
// 		"/",
// 		""
// 	);

// 	const filePath = `/${fileName}`;
// 	const fileURL = `${supabaseUrl}/storage/v1/object/public/files/${filePath}`;
// 	console.log(fileURL);

// 	let query = supabase.from("incidents");

// 	if (!incident.file) {
// 		query = await query.insert([incident]).select("id");
// 	}

// 	if (incident.file) {
// 		query = await query.insert([{ ...incident, file: fileURL }]).select("id");
// 		// 2. Upload the file
// 		const { error: storageError } = await supabase.storage
// 			.from("files")
// 			.upload(filePath, incident.file);

// 		// 3. Delete the incident if there was an error uploading the file
// 		if (storageError) {
// 			await query.delete().eq("id", data[0].id);
// 			console.error(storageError);
// 			throw new Error(
// 				"File could not be uploaded and incident could not be created"
// 			);
// 		}
// 	}

// 	const { data, error } = query;

// 	if (error) throw new Error("Could not create incident");

// 	return data[0].id;
// }

//TODO: cancel featue to be implemented instead for delete
// export async function deleteIncident(id) {
// 	const { error } = await supabase.from("incidents").delete().eq("id", id);

// 	if (error) {
// 		console.error(error);
// 		throw new Error("Could\t load incidents data");
// 	}
// }

export async function updateChangeReqeust(reqeust, editId) {
	//Fetch Change reqeust and update the notes before updating column since it will be overwritten
	const changeReqeustEdit = await getChangeRequest(editId);
	const fetchedNotes = changeReqeustEdit?.at(0).notes;

	const { data, error } = await supabase
		.from("change_requests")
		.update({
			...reqeust,
			notes: fetchedNotes
				? [...fetchedNotes, reqeust.notes.at(0)]
				: reqeust.notes,
		})
		.eq("id", editId)
		.select();

	if (error) {
		console.error(error);
		throw new Error("Could't load change reqeust data");
	}

	return data;
}
