import React from "react";
import "./index.css";
import Icon from "@ant-design/icons";
import { Card, Avatar } from "antd";
import {
	StarOutlined,
	PhoneOutlined,
	MessageOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
export default (props) => {
	return (
		<div className="site-card-border-less-wrapper">
			<Card
				title={
					<TopHeadDetails
						name={props.contact.name}
						companyname={props.contact.companyName}
					/>
				}
				description={props.contact.companyName}
				hoverable="true"
				extra={<Icon component={StarOutlined} fill="yellow" />}
				bordered={false}
				style={{
					borderRadius: "5px",
					width: "300px",
					marginRight: "10px",
					borderRadius: "16px",
				}}
				actions={[<BottomDetails />]}
			>
				<div>
					<div style={{ color: "#64676E" }}>
						{props.contact.status}
					</div>
					<div style={{ color: "#64676E" }}>
						{props.contact.location}
					</div>
				</div>
			</Card>
		</div>
	);
};
function TopHeadDetails(props) {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div>
				<Meta
					description={
						<div style={{ fontSize: "12px" }}>
							{props.companyname}
						</div>
					}
					avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
					title={
						<div
							style={{
								display: "flex",
								margin: "0px !important",
							}}
						>
							{props.name}
						</div>
					}
				/>
			</div>
		</div>
	);
}
function BottomDetails() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					width: "60%",
				}}
			>
				<MessageOutlined
					style={{
						display: "flex",
						alignItems: "center",
						padding: "0 6px 0 0",
					}}
				/>
				<div style={{ margin: "auto 0" }}>Send Message</div>
			</div>
			<div
				style={{
					display: "flex",
					width: "40%",
				}}
			>
				<PhoneOutlined
					style={{
						display: "flex",
						alignItems: "center",
						padding: "0 6px 0 0",
					}}
				/>
				<div style={{ margin: "auto 0" }}>Call</div>
			</div>
		</div>
	);
}
