import { useParams } from "react-router-dom";
import useFetchMaterial from "./UseFetchMaterial";
import { handleBorrow, handleRepair } from "./Handle";
import { Button } from "@mui/material";
import { RouteBar } from "./RouteBar";

const MaterialDetail = () => {
    const tmpUrl = 'http://localhost:8000/materials/';
    const {id} = useParams(); 
    const {data:eachMaterial, isPending} = useFetchMaterial(tmpUrl + id);


    return ( 

        <div className="material-detail">
            {isPending && <div>Loading...</div>}
            {eachMaterial && (
                <div>
                    <RouteBar Route={eachMaterial?.category}/>
                    <article>
                        <h1 className="bigTitle"><center>{eachMaterial?.name}</center></h1>
                        <p>Position: {eachMaterial?.position}</p>
                        <p>Intro: {eachMaterial?.description}</p>
                        {(eachMaterial?.remaining)&&(<p>There are {eachMaterial?.remaining} remaining</p>)}
                        <a href={eachMaterial?.tutorialLink} target="_blank">Tutorial</a>
                    </article>
                    <div style={{float:'right'}}>
                        <img src={eachMaterial?.photoLink} alt="GeeksforGeeks logo"></img>
                        <Button onClick={handleBorrow} variant="text">MUI borrow</Button>
                        <button onClick={handleRepair}>repair</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default MaterialDetail;