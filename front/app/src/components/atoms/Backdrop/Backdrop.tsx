import React from 'react'
import './Backdrop.css';

interface BackdropProps {
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({
  children,
}) => <div className="backdrop">
    <div className="backdrop__container">
      {children}
    </div>
  </div>;
export default Backdrop;