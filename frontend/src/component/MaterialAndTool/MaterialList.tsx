import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { MaterialType } from './MaterialType';
import { handleBorrow } from './Handle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


type MaterialProps = {
    materials: MaterialType[]
}

const WINDOW_WIDTH = window.innerWidth;


export const MaterialList = (props: MaterialProps) => {

    return (
        <div className="mateirial-list">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {props.materials.map(material => {
                return (
                    <Grid item xs={2} sm={4} md={4} key={material.id}>
                        <Paper elevation={3} className="mateirial-preview" key={material.id}>
                            <div style={{border: '20px', padding: '15px',}}>
                                <Link to={`/MaterialAndTool/Material/${material.id}`}>
                                    <img src={material.photoLink} style={{border:'solid black',}} width={WINDOW_WIDTH/5}></img>
                                    <h2>{material.name}</h2>
                                    <p>Position: {material.position}</p>
                                </Link>
                                <Button variant="outlined" onClick={handleBorrow}>Borrow</Button>
                            </div>
                        </Paper>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    );

}