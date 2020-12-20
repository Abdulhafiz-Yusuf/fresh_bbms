import React, { useState } from 'react'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import NaijaStates from 'naija-state-local-government';
import { NaijaStates, NaijaLGA, bloodGroup } from './loc'
//import NaijaLGA from './loc'

export default function RegCompletion(props) {

    const [profile, setprofile] = useState({
        // email: props.email,
        // email_verified: props.email_verified,
        // last_login: props.updated_last,
        username: '',
        phone: '',
        user_loc_state: 'Abia',
        loc_lga: '',
        donor: '',
        bg: ''
    })
    let LGAs = NaijaLGA[profile.user_loc_state]
    const handleChange = (e) => {
        const value = e.target.value
        setprofile({
            ...profile,
            [e.target.name]: value
        })
    }





    return (
        <>
            <div style={{ height: '100px' }}></div>
            <Card className='container w-50 shadow-lg p-3'>
                <div className='d-flex justify-content-lg-center '>
                    <h2>Registration Completion</h2>
                </div>

                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" value={profile.username} onChange={handleChange} placeholder="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">phone</Label>
                        <Input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="080xxxxxxx" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">State</Label>
                        <Input type="select" name="user_loc_state" value={profile.user_loc_state} onChange={handleChange} >
                            {NaijaStates.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">L.G.A</Label>
                        <Input type="select" name="select" value={profile.loc_lga} onChange={handleChange}>
                            {LGAs.map((lga, index) => (
                                <option key={index} value={lga}> {lga}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">Will you like to be a Donor</Label>
                        <Input type="select" name="select" onChange={handleChange}>
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="bg">Blood Group</Label>
                        <Input type="select" name="select" value={profile.loc_lga} onChange={handleChange}>
                            {bloodGroup.map((bg, index) => (
                                <option key={index} value={bg}> {bg}</option>
                            ))
                            }
                        </Input>
                    </FormGroup>
                    <div className='d-flex justify-content-lg-center '>
                        <Button >Submit</Button>
                    </div>

                </Form>

            </Card >
            <div style={{ height: '20px' }}></div>
        </>
    )
}


