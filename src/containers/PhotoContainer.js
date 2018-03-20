import React, { PureComponent } from 'react'
import PhotoItem from '../components/PhotoItem'
import axios from 'axios'

class PhotoContainer extends PureComponent {
  constructor() {
    super()

    this.state = {
      photos: [],
      showAll: false
    }
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
      .then(response => {
        const newPhotos = response.data.map((photo) => {
          return {
            id: photo.id,
            title: photo.title,
            url: photo.url
          }
        })

        this.setState({
          photos: newPhotos,
        })
      })
      .catch(error => console.log(error))
  }

  showAllPics = () => {
    this.setState({
      showAll: true
    })
  }

  renderPhotos = (photo, index) => {
    if (index < 3 && !this.state.showAll) {
      return(
        <PhotoItem key={index} photo={photo}/>
      )
    } else if (this.state.showAll) {
      return(
        <PhotoItem key={index} photo={photo}/>
      )
    } else {
      return
    }
  }

  render() {
    const photos = this.state.photos

    return(
      <div className="photocontainer">
        { photos.map(this.renderPhotos) }
        <button onClick={this.showAllPics}>Show all pictures</button>
      </div>
    )
  }
}

export default PhotoContainer
