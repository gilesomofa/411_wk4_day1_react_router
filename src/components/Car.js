import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core/'

const Car = (props) => {
    let id = props.match.params.id  
    return (
        <Container>
            <Paper>
            <h1> {cars[id-1].Name} </h1>
            <Chip label = {`MPG ${cars[id-1].Miles_per_Gallon}`} />  
            <Chip label = {`Horsepower ${cars[id-1].Horsepower}`} />
            <Chip label = {`Year ${cars[id-1].Year}`} />
            <Chip label = {`Origin ${cars[id-1].Origin}`} />
            <Chip label = {`Weight_in_lbs ${cars[id-1].Weight_in_lbs}`} />
            </Paper>
        </Container>
    )
}

export default Car