import { useParams } from "react-router-dom";
import useFetchMaterial from "./UseFetchMaterial";
import { handleBorrow, handleRepair } from "./Handle";

const MaterialDetail = () => {
    const tmpUrl = 'http://localhost:8000/materials/';
    const {id} = useParams(); 
    const {data:eachMaterial, isPending} = useFetchMaterial(tmpUrl + id);

    const handledelete =()=>{
        fetch('tmpUrl' + eachMaterial?.id,{
            method:'DELETE'
        }).then(()=>{
            window.location.replace('/');
        }
        )   
    }

    return ( 

        <div className="material-detail">
            {isPending && <div>Loading...</div>}
            {eachMaterial && (
                <div>
                    <article>
                        <h2>{eachMaterial?.name}</h2>
                        <p>Position: {eachMaterial?.position}</p>
                        <p>Intro: {eachMaterial?.intro}</p>
                        <p>There are {eachMaterial?.remaining} remaining</p>
                        <a href={eachMaterial?.tutorial} target="_blank">Tutorial</a>
                    </article>
                    <div style={{float:'right'}}>
                        <img src=''></img>
                        <button onClick={handleBorrow} >borrow</button>
                        <button onClick={handleRepair}>repair</button>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default MaterialDetail;