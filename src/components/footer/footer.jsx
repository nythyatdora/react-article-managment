import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const facebook = "";
const instagram = "";
const github = "";

export default function Footer() {
    return (
        <footer>
            <div>
                <span>ស្វែងរកខ្ញុំលើ</span>
                <ul>
                    <li>
                        <Link to={facebook}>
                            <i className="fab fa-facebook-square"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={instagram}>
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={github}>
                            <i className="fab fa-github"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <span>អត្ថបទ</span>
                <ul>
                    <li>
                        <Link to='/home'>ទំព័រដើម</Link>
                    </li>
                    <li>
                        <Link to='/articles'>គ្រប់គ្រង</Link>
                    </li>
                    <li>
                        <Link to='/aboutme'>អំពីខ្ញុំ</Link>
                    </li>
                </ul>
            </div>
            <div>
                <span>
                    រក្សាសិទ្ធដោយ<span>នី ធ្យត្សដូរ៉ា </span>
                </span>

                <span>បង្កើតជាមួយ <i className="fas fa-heart"></i> និង <i className="fas fa-coffee"></i></span>
            </div>
        </footer>
    )
}
