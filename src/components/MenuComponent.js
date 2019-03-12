import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import Dishdetail from './DishdetaiComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <Dishdetail dish={dish} onClick={() => this.onDishSelect(dish)} content={false}/>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail dish={this.state.selectedDish} content={true}/>
            </div>
        );
    }
}

export default Menu;