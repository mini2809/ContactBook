import "./index.css";
import { Table, Tag, Avatar } from "antd";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const columns = [
	{
		title: "",
		dataIndex: "avatar",
		key: "avatar",
		render: () => <Avatar src="https://joeschmoe.io/api/v1/random" />,
	},
	{
		title: "NAME",
		dataIndex: "name",
		key: "name",
		render: (name, data) => {
			return <NameRender name={name} subname={data.companyName} />;
		},
	},
	{
		title: "STATUS",
		dataIndex: "status",
		key: "status",
		render: (status) => {
			return (
				<div style={{ color: "black", fontWeight: "600" }}>
					{status}
				</div>
			);
		},
	},
	{
		title: "LOCATION",
		dataIndex: "location",
		key: "location",
		render: (location) => {
			return (
				<div style={{ color: "black", fontWeight: "600" }}>
					{location}
				</div>
			);
		},
	},
	{
		title: "TAGS",
		key: "tags",
		dataIndex: "tags",
		render: (tags) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 8 ? "geekblue" : "green";
					if (tag === "Internal Works") {
						color = "volcano";
					}
					return (
						<Tag
							color={color}
							key={tag}
							style={{ fontWeight: 600 }}
						>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
	},
	{
		title: "ACTION",
		key: "action",
		render: () => {
			return <ActionRender />;
		},
	},
];

function List() {
	const contacts = useSelector((state) => state.contactReducer.contacts);
	return (
		<>
			<Table columns={columns} dataSource={contacts} />
		</>
	);
}

function ActionRender() {
	return (
		<div style={{ display: "flex" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				{
					<MessageOutlined
						style={{
							display: "flex",
							alignItems: "center",
							padding: "6px",
							color: "lightgray",
						}}
					/>
				}
				<div style={{ color: "lightgray", margin: "auto 0" }}>
					Send message
				</div>
			</div>
			<div style={{ display: "flex" }}>
				{
					<PhoneOutlined
						style={{
							display: "flex",
							alignItems: "center",
							padding: "6px",
							color: "lightgray",
						}}
					/>
				}
				<div style={{ color: "lightgray", margin: "auto 0" }}>Call</div>
			</div>
		</div>
	);
}
function NameRender(props) {
	return (
		<div>
			<div style={{ color: "black", fontWeight: "600" }}>
				{props.name}
			</div>
			<div style={{ color: "gray", fontWeight: "600" }}>
				{props.subname}
			</div>
		</div>
	);
}
export default List;
