import React, { PureComponent } from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import TodoListItem from './ListItem';
import { bindActionCreators } from 'redux';
import * as actions from './actions/todoActions';

class TodoList extends PureComponent {

  constructor() {
    super();

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(todo) {
    this.props.actions.deleteTodo(todo);
  }

  render() {
    const items = this.props.todos || [];

    return (
      <List>
        {items.map(item => <TodoListItem key={item.id} todo={item} onDelete={this.onDelete} />)}
      </List>
    )
  }
}

function mapProps(state, ownProps) {
  return { todos: state.todos };
}

function mapActions(dispatch) {
  var obj = {
    actions: bindActionCreators(actions, dispatch)
  };
  return obj;
}

export default connect(mapProps, mapActions)(TodoList);