import React from 'react';
import ModalImage from "react-modal-image";
import AppLoader from './AppLoader';
import '../App.css';


class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  ImageLoading() {
    return false
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      console.log(error.message)
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className='App-loader' >
        <AppLoader/>
      </div>;
    } else {
      return (
          <div className="App-Gallery">
            {items.map(item => (
              <ModalImage className="Gallery-Img" 
              key={item.id}
              imageBackgroundColor="#86b9ffd2"
              small={item.urls.regular}
              large={item.urls.regular}
            />
            ))}
          </div>
      );
    }
  }
}
export default ImgGallery;
