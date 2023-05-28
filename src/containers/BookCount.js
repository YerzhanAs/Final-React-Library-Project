import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookCount extends Component {

    componentDidMount() {
        console.log('BookCount componentDidMount');
    }

    componentDidUpdate(prevProps) {
        console.log('BookCount componentDidUpdate');
        console.log('Previous Props:', prevProps);
        console.log('Current Props:', this.props);
    }

    componentWillUnmount() {
        console.log('BookCount componentWillUnmount');
    }

    renderBookCount() {
        const { libraryData } = this.props;
        const bookCount = libraryData.length;

        return <p>Amount of Books: {bookCount}</p>;
    }

    render() {
        return (
            <div>
                {this.renderBookCount()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraryData: state.library,
    };
};

export default connect(mapStateToProps)(BookCount);
