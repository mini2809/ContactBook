import List from "./List";
function ContactList() {
	return (
		<div>
			<div
				style={{
					color: "#414980",
					fontSize: "22px",
					fontWeight: "bold",
				}}
			>
				Contacts list
			</div>
			<div>
				<List />
			</div>
		</div>
	);
}
export default ContactList;
