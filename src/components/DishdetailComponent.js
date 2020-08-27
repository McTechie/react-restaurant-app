import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

  renderDish(props) {
    return(
      <Card>
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    const commentary = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, {new Intl.DateTimeFormat("en-US", {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}
          </p>
        </li>
      );
    });

    if (comments!=null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {commentary}
          </ul>
        </div>
      );
    }

    else{
      return (
        <div></div>
      );
    }
  }

  render() {

    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props)}
        </div>
        <div list-unstyled className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
