import React from 'react';

import styles from '../styles/Button.module.sass';

export interface IProps {

}

interface IState {

}

export class Component extends React.Component<IProps, IState> {
  public render() : React.ReactNode {
    return (
      <button className="c-btn c-btn--primary c-btn--flat c-btn-huge a-ripple">
        {this.props.children}
      </button>
    );
  }
}

export default Component;
