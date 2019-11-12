import React, { Component } from 'react';
import CogoToast from 'cogo-toast';
import PostCard from './postCard';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }
    }

    componentDidMount() {
        fetch('http://www.api-ams.me/v1/api/articles?page=1&limit=9', {
            headers: {
                "Authorization": 'Basic QU1TQVBJQURNSU46QU1TQVBJUEBTU1dPUkQ=',
                "content-type": "application/json;charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    list: res.DATA
                });
            }).catch(error => {
                CogoToast.error('server is not responding...',
                    {
                        position: 'bottom-right',
                    }
                );
            });
    }

    render() {
        let { list } = this.state;

        return (
            <main>
                <div className="article--list">
                    {
                        list.map(item => <PostCard key={item.id} data={item}></PostCard>)
                    }
                </div>
            </main>
        );
    }
}
