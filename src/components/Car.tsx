import React from 'react'
import { car } from '../types/types'

interface Props {
    car: car;
}

const Car = ({ car }: Props) => {
    return (
        <div key={car.id} className='car'>
            <span>{car.bodyType}</span>
            <div className='dvModel'>
                <h3>{car.modelName}</h3>
                <span>{car.modelType}</span>
            </div>
            <img src={car.imageUrl} alt='' className='car-image'>
            </img>
        </div>
    )
}

export default Car;
