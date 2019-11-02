import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <header>
            <div>
                <span>កំពុងស្ថិតនៅក្រោមការអភិវឌ្ឍន៍<Link to='/aboutme'>សិក្សាបន្ថែម</Link></span>
                <div>
                    <button>
                        <i className="far fa-times-circle"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}
