import React, { useEffect } from 'react'
import { Table, Card, Button } from 'reactstrap'

function BookingPage({ booking }) {
    useEffect(() => {
        console.log(booking)

    }, [booking])
    return (

        <div className='w-100 d-flex flex-row justify-content-center align-items-center' >
            {booking.length === 0 ?
                <h2 className='text-danger text-center mb-3 font-weight-bold'> Sorry!! You have no Booked Items .... </h2>
                :


                <Card className='text-danger'>
                    <h2 className='text-danger text-center mb-3 font-weight-bold'> Booked Items</h2>
                    <Table className='text-danger' bordered hover striped>
                        <thead>
                            <tr>
                                <th>Blood Group </th>
                                <th>Center Name</th>
                                <th>Location</th>
                                <th>Qantity</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.map((book, index) => {
                                return (< tr >
                                    <th scope="row">{book.bg}<sup>{book.pn}</sup></th>
                                    <td>{book.blood_center_name}</td>
                                    <td>{book.location}</td>
                                    <td>{book.qty}</td>
                                    <td>
                                        {book.payment_status}
                                        <Button className='ml-2 text-light bg-danger font-weight-bold'>Pay Now</Button>
                                    </td>
                                </tr>
                                )
                            })

                            }
                        </tbody>
                    </Table>
                </Card >
            }
        </div>
    )
}

export default BookingPage
