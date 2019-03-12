import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {

        const comments_display = comments.map((comment) => {
            return (
                <li>{comment.comment} <br /> <br />
                    -- {comment.author}, {(new Date(comment.date)).toDateString()}
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
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        if (this.props.content == false)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={this.props.dish.id} onClick={this.props.onClick}>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        else
            return (
                <div>{this.renderDish(this.props.dish)}</div>
            );
    }
}

export default Dishdetail;