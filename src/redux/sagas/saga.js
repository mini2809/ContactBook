import { call, put, takeEvery } from "redux-saga/effects";
import {
	GET_CONTACTS_FETCH,
	GET_CONTACTS_SUCCESS,
	GET_FAVORITE_CONTACTS_FETCH,
	GET_FAVORITE_CONTACTS_SUCCESS,
} from "../actions.js";

function contactsFetch() {
	return fetch("http://localhost:6700/contacts/").then((res) => res.json());
}
function* getAllContacts() {
	const contacts = yield call(contactsFetch);
	yield put({ type: GET_CONTACTS_SUCCESS, contacts });
}

function favoriteContactsFetch() {
	return fetch("http://localhost:6700/contacts/?favorite=true").then((res) =>
		res.json()
	);
}

function* getFavoriteContacts() {
	const contacts = yield call(favoriteContactsFetch);
	yield put({ type: GET_FAVORITE_CONTACTS_SUCCESS, contacts });
}

function* mySaga() {
	yield takeEvery(GET_CONTACTS_FETCH, getAllContacts);
	yield takeEvery(GET_FAVORITE_CONTACTS_FETCH, getFavoriteContacts);
}

export default mySaga;
