import { Layout } from "antd";
import "./index.css";
import HeaderBody from "../Header";

const { Header, Content } = Layout;

function Home() {
	return (
		<>
			<Layout>
				<Header>
					<HeaderBody />
				</Header>
				<Content></Content>
			</Layout>
		</>
	);
}
export default Home;
