import React from 'react';

import styles from './Container.module.sass';

export class Flex extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <main styleName={styles.bgPatternWebDarkly} className="o-wrapper o-wrapper--from-xs u-bg-color--brand-primary">
                {this.props.children}
            </main>
        );
    }
}
