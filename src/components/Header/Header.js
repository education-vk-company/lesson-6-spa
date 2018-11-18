import React from 'react';
import { Link } from 'react-router-dom';

const header = () => (
    <ul>
        <li>
            <Link to=''>Главная</Link>
        </li>
        <li>
            <Link to='/task'>Задачи</Link>
        </li>
        <li>
            <Link to='/about'>О компании</Link>
        </li>
        <li>
            <Link to='/feedback'>Оставить отзыв</Link>
        </li>
    </ul>
);

export default header;