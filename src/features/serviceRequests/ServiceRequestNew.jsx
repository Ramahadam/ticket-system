import { useState } from "react";
import FormCreateUpdate from "../../ui/FormCreateUpdate";

function ServiceRequestNew() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [subCategories, setSubCategories] = useState([]);

	const categories = {
		software: ["power bi", "adobe photoshop", "adobe ilustrator"],
		hardware: ["mouse", "keybaord", "headset"],
	};

	function handleChange(e) {
		const category = e.event.value;
		setSelectedCategory(category);
		setSubCategories(categories[category] || []);
	}

	return (
		<FormCreateUpdate
			requestName="serviceRequest"
			selectedCategory={selectedCategory}
			subCategories={subCategories}
			onChangeCategory={handleChange}
			categories={categories}
		/>
	);
}

export default ServiceRequestNew;
