import React, { PureComponent } from 'react'

class PhotoItem extends PureComponent {

  clickLike() {
    console.log('Nice pic')
  }

  render() {
    const { photo } = this.props

    return(
      <div className="photoitem">
        <div className="photo" style={{
          backgroundImage: `url(${photo.url})`,
          backgroundSize: '100%',
          width: 400,
          height: 400,
          margin: 20
        }}>{ photo.title }</div>
        <button onClick={this.clickLike}>Like</button>
      </div>
    )
  }
}

export default PhotoItem
