import React from 'react';
import { Link } from 'react-router-dom';

import defaultProfile from './default-user.png';
import './posts.css';

export default function PostCard(props) {
    let { data } = props;

    return (
        <div className="article--card">
            <div className="article--card--header">
                <div className="header--label">អត្ថបទ</div>
                <div className="header--title">{data.TITLE}</div>
            </div>

            <div className="article--card--author">
                <div className="author--name">
                    ឈ្មោះមិនស្គាល់
                            </div>
                <div className="author--picture">
                    <img src={defaultProfile}></img>
                </div>
            </div>

            <div className="article--card--description">
                <div className="description-content">
                    {data.DESCRIPTION}
                </div>
            </div>

            <div className="article--card--buttons">
                <Link to={`/articles/view/${data.ID}`}>អានបន្ត</Link>
            </div>
        </div>
    );
}
