/** @jsx React.DOM */
var todoSearch = React.createClass({
    handleChange: function () {
        var query = $("#search").val().trim();
        //var query = this.refs.search.getDOMNode.value.trim();
        this.props.onSearchChange(query);
    },
    render: function () {
        return (
            <form>
                <input type="text" className="form-control" placeholder="Search" id="search" ref="search" onChange={this.handleChange}/>
            </form>
            );
    }
});

var todoList = React.createClass({
    render: function () {
        var todos = this.props.todos.map(function (todo) {
            return (
                <tr>
                    <td>{todo.author}</td>
                    <td>{todo.message}</td>
                </tr>
                )
        });
        return(
            <table className="table">
                <tr>
                    <th>Author</th>
                    <th>Message</th>
                </tr>
                <tbody>
                    {todos}
                </tbody>
            </table>
            )
    }
});

var todoForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var author = this.refs.author.getDOMNode.value.trim();
        var message = this.refs.message.getDOMNode.value.trim();
        var todo = {author: author, message: message};
        this.props.onTODOSubmit(todo);
        this.refs.author.getDOMNode.value = "";
        this.refs.message.getDOMNode.value = "";
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

var todoBox = React.createClass({
    getInitialState: function () {
        return {todos: []};
    },
    componentDidMount: function () {
        var todos = [
            {"author": "Iván Compañy", "message": "This is a message"},
            {"author": "Laura Compañy", "message": "Why are we using this?"},
            {"author": "Iván Compañy", "message": "Cause is cool"}
        ];
        this.props.originalTODOs = todos;
        this.setState({todos: todos});
    },
    handleTODOSubmit: function (todo) {
        var todos = this.state.todos;
        this.setState({todos: todos.push(todo)});
        this.props.originalTODOs = this.state.todos;
    },
    handleSearchChange: function (query) {
        var new_todos = [];
        for (var i = 0; i < this.props.originalTODOs.length; i++) {
            var todo= this.props.originalTODOs[i];
            if (todo.message.indexOf(query) !== -1) {
                new_todos.push(todo);
            }
        }
        this.setState({todos: new_todos});
    },
    render: function () {
        return(
            <div className="col-md-4 col-md-offset-4">
                <h1 className="text-center">TODO List</h1>
                <todoSearch onSearchChange={this.handleSearchChange} />
                <todoList todos={this.state.todos}/>
                <todoForm onTODOSubmit={this.handleTODOSubmit}/>
            </div>
            )
    }
});

React.renderComponent(
    <todoBox />,
    document.getElementById('react-content')
);