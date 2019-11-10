import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import ArticleRow from './articleRow';
import CogoToast from 'cogo-toast';

export default function DisplayArticles(props) {
    const { list } = props;
    const { url } = useRouteMatch();

    return (
        <div className="articles">
            <div className="articles--head">តារាងគ្រប់គ្រងអត្ថបទ
                <Link to={`${url}/add`}><i className="fas fa-plus"></i></Link>
            </div>
            <div className="articles--content">
                <table>
                    <thead>
                        <tr>
                            <th>លេខ</th>
                            <th>ចំណងជើង</th>
                            <th>បង្កើតតាំងពី</th>
                            <th>អធិប្បាយ</th>
                            <th>មុខងារ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(item =>
                                <ArticleRow key={item.ID} data={item}></ArticleRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
