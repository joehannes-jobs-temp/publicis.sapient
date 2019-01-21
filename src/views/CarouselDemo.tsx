import React from 'react';

import { Container } from '../components';

export default class extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <Container.Flex>
                <header className="u-align--center-xs u-align--left-s">
                    <h3>Carousel Test</h3>
                </header>
                {this.props.children}
            </Container.Flex>
        );
    }
}
