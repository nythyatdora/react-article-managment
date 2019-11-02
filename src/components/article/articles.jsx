import React from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import ArticleRow from './articlerow';
import './articles.css';

export default function Articles(props) {
    let { url, path } = useRouteMatch();
    let { list } = props;

    return (
        <Switch>
            <Route exact path={`${path}`}>
                <DisplayArticle list={list}></DisplayArticle>
            </Route>

            <Route path={`${path}/view/:id`}>
                <ViewArticle></ViewArticle>
            </Route>

            <Route path={`${path}/edit/:id`}>
                <EditArticle></EditArticle>
            </Route>

            <Route path={`${path}/delete/:id`}>
                <DeleteArticle></DeleteArticle>
            </Route>
        </Switch>
    );
}

function DisplayArticle(props) {
    const { list } = props;

    return (
        <div className="articles">
            <div>តារាងគ្រប់គ្រងអត្ថបទ<button></button></div>
            <div>
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

function ViewArticle(props) {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <div>ចំណងជើង</div>
            <div>បង្កើតតាំងពី</div>
            <div>អធិប្បាយ</div>
        </div>
    );
}

function EditArticle(props) {
    const { id } = useParams();

    return (
        <div>
            <div>កែប្រែអត្ថបទ</div>
            <div>ចំណងជើង</div>
            <div>អធិប្បាយ</div>
        </div>
    );
}

function DeleteArticle(props) {
    const { id } = useParams();

    return (<div></div>)
}