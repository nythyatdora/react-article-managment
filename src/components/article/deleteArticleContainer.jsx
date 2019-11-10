import React from 'react';
import DeleteArticle from './deleteArticle';

export default function DeleteArticleContainer(props) {
    const { id } = props.match.params;

    return <DeleteArticle articleId={id} {...props}></DeleteArticle>;
}