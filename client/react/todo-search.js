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