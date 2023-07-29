import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { MaterialType } from './MaterialType';
import { handleBorrow } from './Handle';

type MaterialProps = {
    materials: MaterialType[]
}



export const MaterialList = (props: MaterialProps) => {

    return (
        <div className="mateirial-list">
            {props.materials.map(material => {
                return (
                    <div className="mateirial-preview" key={material.id}>
                        <Link to={`/Material/${material.id}`}>
                            <div>
                                <h2>{material.name}</h2>
                                <p>Position: {material.position}</p>
                                <button onClick={handleBorrow}></button>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );

}