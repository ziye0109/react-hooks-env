import React, { useState, useEffect } from 'react';

const Header = () => {
  const [title] = useState('title');

  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="container">
      <div className="title">{title}</div>
    </div>
  );
};

export default Header;
