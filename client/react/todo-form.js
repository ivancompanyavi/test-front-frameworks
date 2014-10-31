/** @jsx React.DOM */

var todoForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var message = this.refs.message.getDOMNode().value.trim();
        var todo = {author: author, message: message};
        this.props.onTODOSubmit(todo);
        this.refs.author.getDOMNode().value = "";
        this.refs.message.getDOMNode().value = "";
    },
    render: function () {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" ref="author"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input type="text" className="form-control" id="message" ref="message"/>
                </div>
                <input type="submit" className="btn btn-block btn-success" value="New TODO"/>
            </form>
        )
    }
});
