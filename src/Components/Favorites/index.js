import "./index.css";
import FavoritesCard from "../FavoritesCard";
import { useSelector } from "react-redux";

function Favorites() {
	const favContacts = useSelector(
		(state) => state.contactReducer.favoriteContacts
	);
	return (
		<div style={{ color: "#414980", fontSize: "22px", fontWeight: "bold" }}>
			Favorite
			<div className="f-cards-container">
				{favContacts.map((contact) => {
					return (
						<FavoritesCard key={contact.name} contact={contact} />
					);
				})}
			</div>
		</div>
	);
}
export default Favorites;
