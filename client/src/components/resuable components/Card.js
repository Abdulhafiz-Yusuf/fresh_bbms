import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const card = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src='props.image' alt="card image" />
                <CardBody>
                    <CardTitle tag="h5">prop.title</CardTitle>

                    <CardText>props.description</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default card;