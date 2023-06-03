import React from 'react'
import { CiFilter } from 'react-icons/ci';

const FeatureProduct = ({ category, onClick }) => {
    return (
        <div className=''onClick={onClick} >
            <div className=' bg-yellow-500 p-7 rounded-md text-3xl hover:bg-red-500 cursor-pointer'>
                <CiFilter />

            </div>
            <p>{category}</p>

        </div>

    )
}

export default FeatureProduct