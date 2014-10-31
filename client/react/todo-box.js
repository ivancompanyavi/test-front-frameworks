/** @jsx React.DOM */

var todoBox = React.createClass({
    getInitialState: function () {
        return {todos: []};
    },
    componentDidMount: function () {
        $.get("http://localhost:3000/api/todos", function(result){
            this.setState({todos: result});
        }.bind(this));
        this.props.originalTODOs = this.state.todos;
    },
    handleTODOSubmit: function (todo) {
        var todos = this.state.todos;
        todo["id"] = todos.length;
        todos.push(todo);
        this.setState({todos: todos});
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