import React, { useState } from 'react';
import s from './Nav.module.css'

const NavUl = (props) => {

    const [isOpen, setOpen] = useState(false)

    const open = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="black">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.6875 21.5625C4.6875 21.3139 4.78627 21.0754 4.96209 20.8996C5.1379 20.7238 5.37636 20.625 5.625 20.625H24.375C24.6236 20.625 24.8621 20.7238 25.0379 20.8996C25.2137 21.0754 25.3125 21.3139 25.3125 21.5625C25.3125 21.8111 25.2137 22.0496 25.0379 22.2254C24.8621 22.4012 24.6236 22.5 24.375 22.5H5.625C5.37636 22.5 5.1379 22.4012 4.96209 22.2254C4.78627 22.0496 4.6875 21.8111 4.6875 21.5625ZM4.6875 14.0625C4.6875 13.8139 4.78627 13.5754 4.96209 13.3996C5.1379 13.2238 5.37636 13.125 5.625 13.125H24.375C24.6236 13.125 24.8621 13.2238 25.0379 13.3996C25.2137 13.5754 25.3125 13.8139 25.3125 14.0625C25.3125 14.3111 25.2137 14.5496 25.0379 14.7254C24.8621 14.9012 24.6236 15 24.375 15H5.625C5.37636 15 5.1379 14.9012 4.96209 14.7254C4.78627 14.5496 4.6875 14.3111 4.6875 14.0625ZM4.6875 6.5625C4.6875 6.31386 4.78627 6.0754 4.96209 5.89959C5.1379 5.72377 5.37636 5.625 5.625 5.625H24.375C24.6236 5.625 24.8621 5.72377 25.0379 5.89959C25.2137 6.0754 25.3125 6.31386 25.3125 6.5625C25.3125 6.81114 25.2137 7.0496 25.0379 7.22541C24.8621 7.40123 24.6236 7.5 24.375 7.5H5.625C5.37636 7.5 5.1379 7.40123 4.96209 7.22541C4.78627 7.0496 4.6875 6.81114 4.6875 6.5625Z" fill="#2C2D35" />
    </svg>
    const close = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fill-rule="evenodd" clipRule="evenodd" d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z" fill="#2C2D35" />
        <path fill-rule="evenodd" clipRule="evenodd" d="M23.25 6.75C23.4489 6.94891 23.5607 7.2187 23.5607 7.5C23.5607 7.7813 23.4489 8.05109 23.25 8.25L8.25001 23.25C8.0511 23.4489 7.78132 23.5606 7.50001 23.5606C7.21871 23.5606 6.94893 23.4489 6.75002 23.25C6.55111 23.0511 6.43936 22.7813 6.43936 22.5C6.43936 22.2187 6.5511 21.9489 6.75002 21.75L21.75 6.75C21.9489 6.55109 22.2187 6.43934 22.5 6.43934C22.7813 6.43934 23.0511 6.55109 23.25 6.75Z" fill="#2C2D35" />
    </svg>

    return (
        <div className={s.navWrapper}>
            <ul className={isOpen ? [s.navList, s.active].join(' ') : [s.navList]}>
                <li><a className={s.navA} href="#">Репродукции</a></li>
                <li><a className={s.navA} href="#">Новинки</a></li>
                <li><a className={s.navA} href="#">О нас</a></li>
            </ul>
            <button className={s.burgerButton} onClick={() => setOpen(!isOpen)}>
                {isOpen ? close : open}
            </button>
            <a className={s.navA} href="#">
                <svg className={s.cart} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <g clipPath="url(#clip0_24104_102)">
                        <path d="M8.25001 20.1667C8.75627 20.1667 9.16668 19.7563 9.16668 19.25C9.16668 18.7438 8.75627 18.3334 8.25001 18.3334C7.74375 18.3334 7.33334 18.7438 7.33334 19.25C7.33334 19.7563 7.74375 20.1667 8.25001 20.1667Z" stroke="#2C2D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.3333 20.1667C18.8396 20.1667 19.25 19.7563 19.25 19.25C19.25 18.7438 18.8396 18.3334 18.3333 18.3334C17.8271 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8271 20.1667 18.3333 20.1667Z" stroke="#2C2D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.916656 0.916626H4.58332L7.03999 13.1908C7.12381 13.6128 7.35341 13.9919 7.68857 14.2617C8.02374 14.5315 8.44313 14.6749 8.87332 14.6666H17.7833C18.2135 14.6749 18.6329 14.5315 18.9681 14.2617C19.3032 13.9919 19.5328 13.6128 19.6167 13.1908L21.0833 5.49996H5.49999" stroke="#2C2D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_24104_102">
                            <rect width="22" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    );
};

export default NavUl;