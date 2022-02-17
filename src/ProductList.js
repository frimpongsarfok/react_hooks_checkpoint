import React from "react";
import { Grid  } from "@mui/material";
import Product from "./Product"
import { margin } from "@mui/system";
export default function ProductList(props){

    return (
    <Grid container spacing={1}>
        {props.items.map((item,idx)=><Product key={idx} item={item} getDetails={props.getDetails}/>)}
    </Grid>);
}