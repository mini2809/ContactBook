import { GET_CONTACTS_SUCCESS, GET_FAVORITE_CONTACTS_SUCCESS } from "./actions";

const contactReducer = (
	state = { contacts: [], favoriteContacts: [] },
	action
) => {
	switch (action.type) {
		case GET_CONTACTS_SUCCESS:
			return { ...state, contacts: action.contacts };
		case GET_FAVORITE_CONTACTS_SUCCESS:
			return { ...state, favoriteContacts: action.contacts };
		default:
			return state;
	}
};
export default contactReducer;
