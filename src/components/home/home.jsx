import React from 'react';
import './home.css';
import homepic  from '../../svg/undraw_innovative_b409.svg';

export default function Home() {
    return (
        <div className="home">
            <div>
                <span>នី ធ្យត្សដូរ៉ា</span>
                <span>វេបឌីសាញ(ន័រ)</span>
                <button>ស្វែងយល់</button>
            </div>

            <div>
                <img src={homepic} alt={'អ្នកឌីសាញ'}></img>
            </div>
        </div>
    )
}
