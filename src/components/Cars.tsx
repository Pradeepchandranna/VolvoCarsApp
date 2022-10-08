import React from 'react'
import cars from '../../public/api/cars.json'
import Car from './Car'

interface Props {

}

const Cars = () => {
    return (
        <div className='cars'>
            {
                cars.map((eachCar, index) => {
                    return (
                        <Car car={eachCar}></Car>
                    )
                })
            }
        </div>
    )
}

export default Cars;