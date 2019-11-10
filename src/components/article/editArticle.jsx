import React from 'react';

export default class EditArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {
                TITLE: 'ចំណងជើង',
                CREATED_DATE: 'ថ្ងៃបង្កើត',
                DESCRIPTION: 'សេចក្តីអធិប្បាយ'
            }
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        fetch(`http://www.api-ams.me/v1/api/articles/${id}`, {
            method: 'GET',
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        })
            .then(res => res.json())
            .then(res => {
                let { DATA } = res;

                this.setState({
                    TITLE: DATA.TITLE,
                    CREATED_DATE: DATA.CREATED_DATE,
                    DESCRIPTION: DATA.DESCRIPTION,
                })
            })
            .catch(error => console.log(error));
    }

    submitHandler = (event) => {
        event.preventDefault();
        let { TITLE, CREATED_DATE, DESCRIPTION } = this.state;
    };

    titleHandler = (event) => {
        this.setState({
            TITLE: event.target.value,
        })
    }

    createdDateHandler = (event) => {
        this.setState({
            CREATED_DATE: event.target.value,
        })
    }

    descriptionHandler = (event) => {
        this.setState({
            DESCRIPTION: event.target.value,
        })
    }

    render() {
        return (
            <form class="article--edit" onSubmit={this.submitHandler}>
                <div className="article--edit--header">
                    <div>អត្ថបទ</div>
                    <div>
                        <textarea value={this.state.TITLE} onChange={this.titleHandler}></textarea>
                    </div>
                </div>
                <div className="article--edit--date">
                    <span>បង្កើតតាំងពី</span>
                    <span>
                        <input type="text" value={this.state.CREATED_DATE} onChange={this.createdDateHandler} />
                    </span>
                </div>
                <div className="article--edit--description">
                    <textarea value={this.state.DESCRIPTION} onChange={this.descriptionHandler}>
                    </textarea>
                </div>
                <div className="article--edit--buttons">
                    <button >កែប្រែ</button>
                </div>
            </form>
        );
    }
}
