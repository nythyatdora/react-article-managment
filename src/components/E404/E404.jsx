import React from 'react';

import './E404.css';
// import Err404 from '../../svg/undraw_page_not_found_su7k.svg';

export default function E404() {
    const list = ['អត់លិឍ', 'អត់ងាប់', 'អត់ន័យ', 'អត់ចង់', 'អត់ធ្វើ', 'អត់ចេះ', 'អត់មក', 'អត់ប្រើ', 'អត់ស្រី', 'អត់MAC', 'អត់ស្រលាញ់', 'អត់កង្ហារ'];

    return (
        <div className="error404">
            {/* <img src={Err404} /> */}
            <div className="text-list">
                <Just404 list={list}></Just404>
            </div>
        </div>
    );
}

class Just404 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        };
    }

    componentDidMount() {
        this.setState({
            list: this.props.list,
        });
    }

    returnHome = event => {
         
    };

    render() {
        const { list } = this.state;

        return (
            list.map((item, index) =>
                <span key={index} onClick={this.returnHome}>
                    {item}
                </span>
            )
        );
    }
}

