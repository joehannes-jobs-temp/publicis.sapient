import React from 'react';

import styles from './Flex.module.sass';

export class Flex extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <main className={`${styles.bg_pattern_web_darkly} o-wrapper o-wrapper--from-xs u-bg-color--brand-primary`}>
                {this.props.children}
            </main>
        );
    }
}
