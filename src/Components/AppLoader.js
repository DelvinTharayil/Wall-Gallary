import React from 'react';
import Loader from "react-loader-spinner";

export default class AppLoader extends React.Component {
    render() {
      return (
        <Loader
          type="BallTriangle"
          color="#386ffa"
          height={100}
          width={100}
        />
      );
    }
  }

