import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ArticleRow(props) {
    const { data } = props;
    const { url } = useRouteMatch();

    return (
        <tr>
            <td>{data.ID}</td>
            <td>{data.TITLE}</td>
            <td>{data.CREATED_DATE}</td>
            <td>{data.DESCRIPTION}</td>
            <td>
                <div>
                    <Link to={`${url}/view/${data.ID}`}>
                        <i className="far fa-eye"></i>
                    </Link>

                    <Link to={`${url}/edit/${data.ID}`}>
                        <i className="fas fa-pen-alt"></i>
                    </Link>

                    <Link to={`${url}/delete/${data.ID}`}>
                        <i className="fas fa-eraser"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
