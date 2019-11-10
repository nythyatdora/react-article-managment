import React from 'react';

export default class ResizableTextarea extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rows: 1,
            minRows: 1,
            maxRows: 20,
        };
    }

    componentDidMount() {
        this.setState({
            rows: this.props.rows,
            lineHeight: this.props.lineheight,
        });
    }

    handleChange = (event) => {
        const textareaLineHeight = this.state.lineHeight;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea 

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
        
        this.props.onChange(event);
    };

    render() {
        return (
            <textarea
                {...this.props}
                rows={this.state.rows}
                onChange={this.handleChange}
            />
        );
    }
}