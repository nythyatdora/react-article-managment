import React from 'react';

export default function Table(props) {
    return (
        <table className={props.className}>
            <thead>{props.headData}</thead>
            <tbody>{props.bodyData}</tbody>
        </table>
    )
}
