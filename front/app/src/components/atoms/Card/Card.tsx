import React, { useMemo } from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  classes?: string;
  flat?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  classes,
  flat,
}) => {
  const className = useMemo(() => `card ${flat ? 'flat' : 'default'} ${classes ?? ''}`.trim(), [classes]);
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default React.memo(Card);