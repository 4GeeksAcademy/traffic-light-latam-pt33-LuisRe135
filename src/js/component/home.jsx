import React, {useState} from "react";
import Light from "./Light";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	return (
		<div className="text-center bg-black flex-column" style={{maxWidth: "8em", height: "20em"}}>

			<div className={"rounded-circle m-auto mt-2 clickedLight-"+color}  style={{width: "5em", height:"5em", backgroundColor: 'red'}}>
            
			</div>
			<div className={"rounded-circle m-auto mt-2 clickedLight-"+color}  style={{width: "5em", height:"5em", backgroundColor: 'yellow'}}>
            
			</div>
			<button className={"rounded-circle m-auto mt-2 clickedLight-"+color}  onMouseEnter={() =>{(console.log('green'))}} style={{width: "5em", height:"5em", backgroundColor: 'green'}}>
            
			</button>
		
		</div>
	);
};

export default Home;
