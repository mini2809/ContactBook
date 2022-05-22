import { Layout } from "antd";
import "./index.css";
import { useEffect } from "react";
import HeaderBody from "../Header";
import Favorites from "../Favorites";
import ContactList from "../ContactList";
import { useDispatch } from "react-redux";

const { Header, Content } = Layout;

function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "GET_CONTACTS_FETCH" });
		dispatch({ type: "GET_FAVORITE_CONTACTS_FETCH" });
	}, [1]);

	return (
		<>
			<Layout>
				<Header>
					<HeaderBody />
				</Header>
				<Content style={{ padding: "40px" }}>
					<Favorites />
					<ContactList />
				</Content>
			</Layout>
		</>
	);
}
export default Home;
