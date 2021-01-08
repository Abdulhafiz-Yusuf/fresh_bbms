import React, { useEffect, useState } from 'react'
import CardList from '../../resuableComponents/CardList'
import { Table, CardTitle, CardText } from 'reactstrap'
//import { bgData } from '../Dashboard/data'
import { useSelector, useDispatch, useStore } from "react-redux";
import { fetchBlood, } from '../../../appStore/_actions/BloodBankAction'


const LandingPage = () => {
    const [bgData, setBgData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlood)
            .then(response => {
                console.log(response.payload.bg)
                setBgData(response.payload.bg)
            })

    }, [dispatch])

    return (

        <div className=' container mt-5 mb-5'>
            <div style={{ height: '100px' }}></div>
            <div className='mb-5 shadow p-4'>
                <CardTitle tag="h2"> Become A Blood Donor! Save A Life Today!!</CardTitle>
                <CardText>
                    Blood is a body fluid in humans and other animals that delivers necessary substances such as nutrients and oxygen to the cells and transports metabolic waste products away from those same cells. In vertebrates, it is composed of blood cells suspended in blood plasma.
                </CardText>
            </div>
            <div className='d-flex flex-row'>

                <div className='   w-75 row '>
                    <CardList bgData={bgData} />
                </div>
                <div className='  w-25 rounded'>

                    <Table bordered className='bg-danger text-light w-100 text-center mt-3'>
                        <thead className='text-center'>
                            <th colspan="2" className='font-weight-bold text-light'>
                                Statistics of Available Blood
                            </th>
                        </thead> <thead>
                            <th>Blood Group </th>
                            <th>Quantity in pints</th>

                        </thead>
                        {bgData.map((item, index) => {
                            return (
                                < tr >
                                    <td>{item.bg}<sup>{item.rhd}</sup></td>
                                    <td>{item.blood_qty} pints</td>
                                </tr>
                            )
                        })
                        }

                    </Table>

                </div>
            </div >





        </div >
    )
}

export default LandingPage
