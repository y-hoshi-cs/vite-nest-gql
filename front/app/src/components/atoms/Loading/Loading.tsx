import React from 'react'
import './Loading.css';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  isLoading
}) => {
  return (<>{isLoading && <div className='loading'></div>}</>);
}
export default Loading;