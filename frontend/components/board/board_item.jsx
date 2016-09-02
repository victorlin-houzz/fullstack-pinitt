import React from 'react';
import { Link, withRouter } from 'react-router';

class BoardItem extends React.Component {
  constructor(props) {
    super(props);
    this.board = this.props.board;
    this.pins = this.props.pins;
    this.user = this.props.user;
  }

  isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true && JSON.stringify(obj) === JSON.stringify({});
  }

  render() {
    let pinsImageUrl =[null, null, null];
    let pinCounts = 0;
    if (this.pins !== undefined) {
      let pinKeyArr = Object.keys(this.pins);
      pinCounts = pinKeyArr.length;
      
      for (var i = 0; i < 3; i++) {
        if (i < pinKeyArr.length) {
          pinsImageUrl[i] = this.pins[pinKeyArr[i]].image_url;
        }
      }
    }
    let imgs = pinsImageUrl.map((url, idx) => {
      if (url === null) {
        return "";
      } else {
        return (
          <img src={url} />
        );
      }
    });

    let boardUrl = "/boards/"+this.board.id;
    return (
      <section className="board-item-container" key={this.board.id+this.board.title}>
        <Link to={boardUrl}>
          <div className='pin-picture-block'>
            <div className='one-pic'>
              <div className='pin-picture-background pin-picture-0'>
                {imgs[0]}
              </div>
            </div>
            <div className='two-pics'>
              <div className='pin-picture-background pin-picture-1'>
                {imgs[1]}
              </div>
              <div className='pin-picture-background pin-picture-1'>
                {imgs[2]}
              </div>
            </div>
          </div>
          <br/>
          <div className='detail-block'>
            <div className='board-title'>{this.board.title}</div>
            <div className='pin-count-block'>
              <div className='pin-count'>{pinCounts} Pins</div>
            </div>
            <div className='edit-board-button'>Edit</div>
          </div>
      </Link>
      </section>
    );
  }
}

export default withRouter(BoardItem);
