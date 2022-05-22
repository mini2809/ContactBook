import "./index.css";
import { Modal, Button } from "antd";
import { useState } from "react";

function AddContact() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Button className="add-button" size="100px" onClick={showModal}>
				Add Contact
			</Button>
			<Modal
				title="Add a New Contact"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Return
					</Button>,
					<Button key="submit" type="primary" onClick={handleOk}>
						Submit
					</Button>,
					<Button
						key="link"
						href="https://google.com"
						type="primary"
						onClick={handleOk}
					>
						Search on Google
					</Button>,
				]}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
}
export default AddContact;
