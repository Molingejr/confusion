import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


function RenderComments({ comments }) {

    const comments_display = comments.map((comment) => {
        return (
            <li>{comment.comment} <br /> <br />
                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                <br /><br />
            </li>

        );
    });

    if (comments != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        <CardText>
                            <ul className="list-unstyled">
                                {comments_display}
                            </ul>
                        </CardText>

                    </CardBody>
                </Card>
            </div>
        )
    else
        return (
            <div></div>
        );
};

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    else
        return <div></div>
}

export default DishDetail;