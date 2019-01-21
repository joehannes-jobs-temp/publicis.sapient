- Book 3: The Primary View

Though we got no routing and lack multiple pages in this `pseudo-SPA` I'll go ahead
and create another wrapper for our (as of now) only view.
[views/CarouselDemo.tsx](#Carousel-View "save:")

## Carousel View

We'll now utilize the Flex-Container we created in [Book 2](public/literature/components/FlexContainer.md).

```tsx
import React from 'react';

import { Container } from '../components';
import { Button } from '../components';

import * as Behaviours from '../lib/Behaviours';

export default class extends React.Component<{}, {}> {
    protected buttonProps: Button.IProps = {
        animation: Behaviours.Animation.Ripple,
        color: (Behaviours.ComponentColor.Primary as unknown as Function)('btn'),
        decoration: Behaviours.Decoration.ElevatedBottom,
        disabled: false,
        size: (Behaviours.ComponentSize.Medium as unknown as Function)('btn'),
        buttonType: Behaviours.ButtonType.Flat,
        onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void(null),
    }

    public render(): React.ReactNode {
        return (
            <Container.Flex>
                <header className="u-align--center-xs u-align--left-s">
                    <h3>Carousel Test</h3>
                </header>
                {this.props.children}
                <Button.Component
                    {...Object.assign({}, this.buttonProps, { onClick: this.handleClickPrev })}
                >
                    Prev
                </Button.Component>
                <Button.Component
                    {...Object.assign({}, this.buttonProps, { onClick: this.handleClickNext })}
                    onClick={this.handleClickNext}
                >
                    Next
                </Button.Component>
            </Container.Flex>
        );
    }

    protected handleClickPrev(ev: React.SyntheticEvent<HTMLButtonElement>): void {
        console.log('clicked prev');
    }

    protected handleClickNext(ev: React.SyntheticEvent<HTMLButtonElement>): void {
        console.log('clicked next');
    }
}
```
