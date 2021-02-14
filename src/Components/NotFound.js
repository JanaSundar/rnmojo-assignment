import { useLottie } from 'lottie-react';
import { Link } from 'react-router-dom';
import AnimationData from '../Assets/404-page.json';

const NotFound = () => {
  const options = {
    animationData: AnimationData,
    loop: true,
    autoplay: true,
  };

  const style = {
    height: 500,
    width: 500,
  };

  const { View } = useLottie(options, style);

  return (
    <div className="container">
      {View}
      <Link to="/" className="btn">Home</Link>
    </div>
  );
};

export default NotFound;
