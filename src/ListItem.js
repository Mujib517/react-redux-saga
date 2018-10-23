import React, { PureComponent } from 'react';
import { ListItem, ListItemText, Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';

export default class TodoListItem extends PureComponent {

  render() {
    const { title } = this.props.todo;
    return (
      <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary={title} secondary="Jan 9, 2014" />
      </ListItem>
    )
  }
}