import React, {useState} from "react";
import Light from "./Light";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	return (
		<div className="container d-flex justify-content-center m-5">
			<div className="text-center bg-black flex-column p-3" style={{maxWidth: "8em", height: "20em"}}>
				
				<div className={"rounded-circle m-auto mt-2 "+ (color =="red" ? "clickedLight-red" : "") } onClick={() =>{setColor("red")}} style={{width: "5em", height:"5em", backgroundColor: 'red'}}>
				
				</div>
				<div className={"rounded-circle m-auto mt-2 "+ (color =="yellow" ? "clickedLight-yellow" : "") } onClick={() =>{setColor("yellow")}} style={{width: "5em", height:"5em", backgroundColor: 'yellow'}}>
				
				</div>
				<button className={"rounded-circle m-auto mt-2 "+ (color =="green" ? "clickedLight-green" : "") }  onClick={() =>{setColor("green")}} style={{width: "5em", height:"5em", backgroundColor: 'green'}}>
				
				</button>
			
			</div>
		</div>
	);
};

export default Home;
