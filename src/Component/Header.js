import React, { useState } from 'react';

const Header = () => {
    const [title] = useState('React Hook');

    return <div className='container'>

                <div className='title'>{title}</div>

        </div>;
};


export default Header;
