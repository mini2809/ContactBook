import { Button } from "antd";
import "./index.css";
import Search from "../../public/icons/search.png";
import menu from "../../public/icons/menu.png";
function HeaderBody() {
	return (
		<div className="header-body">
			<div className="brannd">DOZ Pharmacy - Contacts</div>
			<div className="buttons">
				<Button className="add-button" size="100px">
					Add Contact
				</Button>
				<Button type="primary" className="menu">
					<img src={menu} alt="menu" height={"20px"} />
				</Button>

				<Button type="primary" className="search">
					<img src={Search} alt="search" height={"20px"} />
				</Button>
			</div>
		</div>
	);
}
export default HeaderBody;
