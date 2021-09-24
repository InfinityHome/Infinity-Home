import React from "react";
import { Image, ScrollView, View } from "react-native";
import Text from "../customs/CustomText";

const ServiceList = [
	{
		Service: "Plumbing",
		Img: "https://clowdarling.com/wp-content/uploads/2019/09/plumbing_kv5pgw.jpg",
	},
	{
		Service: "Electrical",
		Img: "https://www.maricopaelectric.com/wp-content/uploads/2015/09/wires2.jpg",
	},
	{
		Service: "Lawn",
		Img: "https://verycozyhome.com/wp-content/uploads/2020/07/importance-of-lawn-care.jpg",
	},
	{
		Service: "Painting",
		Img: "https://www.2dodone.com/wp-content/uploads/2018/09/painting-services.jpg",
	},
	{
		Service: "Hvac",
		Img: "https://verycozyhome.com/wp-content/uploads/2020/07/importance-of-lawn-care.jpg",
	},
	{
		Service: "Roofing & Guttur",
		Img: "https://verycozyhome.com/wp-content/uploads/2020/07/importance-of-lawn-care.jpg",
	},
	{
		Service: "Moving",
		Img: "https://verycozyhome.com/wp-content/uploads/2020/07/importance-of-lawn-care.jpg",
	},
    {
		Service: "Moving",
		Img: "https://verycozyhome.com/wp-content/uploads/2020/07/importance-of-lawn-care.jpg",
	},
    {
		Service: "Moving",
		Img: "https://verycozyhome.com/wp-content/uploads/2020/07/importance-of-lawn-care.jpg",
	},
];
const Services: React.FC = () => {
	return (
		<View>
			<Text
				style={{ paddingHorizontal: 37, paddingVertical: 10, fontSize: 24 }}>
				Service
			</Text>
				{ServiceList.map((serv, index) => (
					<View
						key={index}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#c4c4c4",
							paddingVertical: 10,
							borderRadius: 50,
							marginVertical: 10,
						}}>
						<Icon service={serv.Service} image={serv.Img} />
						<Service service={serv.Service} image={serv.Img} />
					</View>
				))}
		</View>
	);
};

const Icon: React.FC<{ service: string; image: string }> = (props) => (
	<Image
		source={{
			uri: props.image,
			width: 70,
			height: 70,
		}}
		style={{ borderRadius: 100, marginHorizontal: 40 }}
	/>
);

const Service: React.FC<{ service: string; image: string }> = (props) => (
	<Text style={{ fontSize: 35 }}>{props.service}</Text>
);

export default Services;
