import React from 'react';
import people from '../../assets/people.png';
import kitty from '../../pictures/kitty.png';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Let&apos;s Create Something amazing with Kitty Project</h1>
            <p>Wonderful kitty can give you a wonderful mood for the whole day with their purring.
                Step into the future with our new format </p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={kitty} />
        </div>
    </div>
);

export default Header;