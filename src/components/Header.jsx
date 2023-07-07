import React from 'react';
import classes from '../css/Header.module.css';
import {Row,Col} from 'react-bootstrap';

const Header = () => {
  return (
      <Row>
        <Col>
           <div className={classes.root}>Todo List</div>
        </Col>
      </Row>
  )
}

export default Header;