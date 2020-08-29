import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish!=null) {
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {return <div></div>}
  }

  renderComments(comments) {
    if (comments!=null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author}, {new Intl.DateTimeFormat("en-US", {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}
                  </p>
                </li>
              );
            })}
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div list-unstyled className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish ? this.props.dish.comments : null)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
