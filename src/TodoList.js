import React, { PureComponent } from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import TodoListItem from './ListItem';
import { bindActionCreators } from 'redux';
import * as actions from './actions/todoActions';

class TodoList extends PureComponent {

  render() {
    const items = this.props.todos || [];

    return (
      <List>
        {items.map(item => <TodoListItem key={item.id} todo={item} />)}
      </List>
    )
  }
}

function mapProps(state, ownProps) {
  console.log("map props", state);
  return { todos: state.todos };
}

function mapActions(dispatch) {
  var obj = {
    actions: bindActionCreators(actions, dispatch)
  };

  console.log("map actions", obj);

  return obj;
}

export default connect(mapProps, mapActions)(TodoList);