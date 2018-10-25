import React, { PureComponent } from 'react';
import { ListItem, ListItemText, Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';

export default class TodoListItem extends PureComponent {

  constructor() {
    super();

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.todo);
  }

  render() {
    const { title } = this.props.todo;
    return (
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary={title} secondary="Jan 9, 2014" />
        <Button raised="true" color="primary" onClick={this.onDelete}>Delete</Button>
      </ListItem>
    )
  }
}