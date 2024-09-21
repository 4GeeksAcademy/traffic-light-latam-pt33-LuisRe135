import React, {useState} from "react";
import Light from "./Light";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	return (
		<div className="mt-4">
		<div className="bg-black m-auto rounded-top" style={{width: "2em", height: "5em", position: "block"}}> </div>

		<div className="container d-flex justify-content-center text-center">
			<div className="text-center rounded bg-black flex-column p-3" style={{maxWidth: "8em", height: "20em"}}>
				
				<div className={"rounded-circle m-auto mt-2 "+ (color =="red" ? "clickedLight-red" : "") } onClick={() =>{setColor("red")}} style={{width: "5em", height:"5em", backgroundColor: 'red'}}>
				
				</div>
				<div className={"rounded-circle m-auto mt-2 "+ (color =="yellow" ? "clickedLight-yellow" : "") } onClick={() =>{setColor("yellow")}} style={{width: "5em", height:"5em", backgroundColor: 'yellow'}}>
				
				</div>
				<div className={"rounded-circle m-auto mt-2 "+ (color =="green" ? "clickedLight-green" : "") }  onClick={() =>{setColor("green")}} style={{width: "5em", height:"5em", backgroundColor: 'green'}}>
				
				</div>
			
			</div>
		</div>
		</div>
	);
};

export default Home;
