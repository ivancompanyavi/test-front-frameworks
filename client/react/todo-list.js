/** @jsx React.DOM */

var todoList = React.createClass({
    render: function () {
        var todos = this.props.todos.map(function (todo) {
            return (
                <tr key={todo.id}>
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