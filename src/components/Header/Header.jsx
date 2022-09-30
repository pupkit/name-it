import React from 'react';
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className='header-container'>
            <img
                src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png'
                className={`head-image ${
                    headerExpanded
                        ? 'header-image-expanded'
                        : 'header-image-contracted'
                }`}
                alt='Header'
            />
            <h1
                className={`header-text ${
                    headerExpanded
                        ? 'header-text-expanded'
                        : 'header-text-contracted'
                }`}
            >
                {headTitle}
            </h1>
        </div>
    );
};

export default Header;
