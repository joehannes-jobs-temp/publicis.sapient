import React from 'react';

import { Button } from './components';

import styles from './App.module.sass';

class App extends React.Component<{}, {}> {
  public render() : React.ReactNode {
    return (
      <div className={styles.App}>
        <header styleName={styles.AppHeader} className="u-bg-color--neutral-secondary">
          <p>
            Edit <Button.Component>src/App.tsx</Button.Component> and save to reload.
          </p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
