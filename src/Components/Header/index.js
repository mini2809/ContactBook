import "./index.css";
import { Button } from "antd";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import AddContact from "../AddContactModal";

function HeaderBody() {
	return (
		<div className="header-body">
			<div className="brand">DOZ Pharmacy - Contacts</div>
			<div className="buttons">
				<AddContact />
				<Button type="primary" className="menu">
					<MenuOutlined
						style={{
							height: "20px",
							color: "#2432B7",
						}}
					/>
				</Button>

				<Button type="primary" className="search">
					<SearchOutlined
						style={{
							height: "20px",
							color: "white",
						}}
					/>
				</Button>
			</div>
		</div>
	);
}
export default HeaderBody;
