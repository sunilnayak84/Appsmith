export default {
	property: "User Name",
	getGendersFromTable() {
		let genders = GetGenders.data;
		return genders.map(g => ({
			label: g.gender,
			value: g.gender
		}))
	}
}