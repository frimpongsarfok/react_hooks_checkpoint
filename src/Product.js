import React from "react";
import {Grid} from "@mui/material"
import Box from '@mui/material/Box';
import { ListItem } from "@mui/material";
import ViewImage from "./ViewImage";
export default function Product(props){
    
   

    return (
        <Grid item xs={12} sm={4}>
              <Box
        sx={{
          boxShadow: 3,
   
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 2,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
     
            {
                <article id={props.item.id} key={props.item.id} onClick={(e)=>{props.getDetails(props.item.id)}}>
                    <h2>{props.item.name}</h2>
                    <p><em> {props.item.description}</em></p>
                    <p><i>Categor :</i>{props.item.category}</p>
                    <p><i>Price $ :</i><b>{props.item.default_price}</b></p> 
                    <ViewImage  id={props.item.id} name={props.item.name} />
                </article>
                
            }
               
      </Box>
    </Grid>
    );
}