import React, { useEffect, useState } from 'react';
import { Table, Card, CardTitle, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBloodbyId } from '../../../appStore/_actions/BloodBankAction';


const BloodDetailPage = (props) => {
    /*
    TASK
    ====
    1.  Use useEffect to fetch bgDetail with id equal to id in props.match.params.bgId 
    2.  Use bgDetail.bg to fetch bgDetailPage Data where bg === req.body.bgDetail.bg
    3.  Display bgDetailPage Data in tables
    */

    const dispatch = useDispatch()

    const bgDetail = useSelector(state => state.BloodBankReducer.bgDetail);
    const bcDetail = useSelector(state => state.BloodBankReducer.bcDetail);
    const bgId = props.match.params.bgId;
    // const [bgDetail, setBgDetail] = useState([])
    // const [bcDetail, setBcDetail] = useState([])

    useEffect(() => {
        dispatch(fetchBloodbyId(bgId))
            .then(response => {
                console.log(response.payload)
                // setBgDetail(response.payload.bg)
                // setBcDetail(response.payload.bc)
                console.log(bgDetail)
                console.log(bcDetail)
            })

    }, [])


    return (



        < div className=' container mt-5 mb-5' >
            <div style={{ height: '100px' }}></div>
            {
                bcDetail.length === 0 ?
                    <h2 className='text-danger text-center mb-3 font-weight-bold'>
                        Sorry!! No  Available {bgDetail[0].bg}<sup>{bgDetail[0].rhd}</sup> Blood Group....</h2>
                    :
                    <Card className='text-danger d-flex justify-content-center align-items-center'>
                        <h2 className='text-danger text-center mb-3 font-weight-bold'> </h2>

                        <h1 className='text-center font-weight-bolder text-danger' >Available {bgDetail[0].bg}<sup>{bgDetail[0].rhd}</sup> Blood Group</h1>

                        <Table className='text-danger' bordered hover striped>
                            <thead>
                                <tr>

                                    <th>Center Name</th>
                                    <th>Location</th>
                                    <th>Qantity</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bcDetail.map((bg, index) => {
                                    return (< tr >
                                        <td>{bg.bc_name}</td>
                                        <td>{bg.bc_loc_state}</td>
                                        <td>{bg.blood_qty}</td>
                                        <td>
                                            <Button className='ml-2 text-light bg-danger font-weight-bold'>Book Now</Button>

                                        </td>
                                    </tr>
                                    )
                                })

                                }
                            </tbody>
                        </Table>
                    </Card >
            }

        </div >
    )
}

export default BloodDetailPage
