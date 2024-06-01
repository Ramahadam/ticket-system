import moment from "moment";

export function dateDifference(createdDate, updatedDate) {
	///https://momentjs.com/docs/
	//Credit to https://stackoverflow.com/users/7850015/dryden-williams

	const startDate = moment(new Date(createdDate));
	const endDate = moment(new Date(updatedDate));

	const hoursDiff = startDate.from(endDate);

	return hoursDiff;
}
