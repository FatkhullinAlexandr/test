import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="32"
                        viewBox="0 0 36 32">
                        <path d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"></path>
                        <path d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"></path>
                        <path d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999 17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852 0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"></path>
                    </svg>
                    <span>Books</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
