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

export interface IProps {
}

interface IState {
  firstImgIndex: number;
  dataReady: boolean;
}

export default class extends React.Component<IProps, IState> {
    protected buttonProps: Button.IProps = {
        animation: Behaviours.Animation.Ripple,
        color: (Behaviours.ComponentColor.Primary as unknown as Function)('btn'),
        decoration: Behaviours.Decoration.ElevatedBottom,
        disabled: false,
        size: (Behaviours.ComponentSize.Medium as unknown as Function)('btn'),
        buttonType: Behaviours.ButtonType.Flat,
        onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void(null),
    }

    constructor(props: IProps) {
      super(props);

      this.state = {
        firstImgIndex: 0,
        dataReady: false,
      };
    }

    public render(): React.ReactNode {
        return dataReady ? (
            <Container.Flex>
                <header className="u-align--center-xs u-align--left-s">
                    <h3>Carousel Test</h3>
                </header>
                <Carousel.Component
                  data={carouselData}
                  currentStart={firstImgIndex}
                />
                <article aria-label="control" className={`${ctrl_buttons} u-align--center`}>
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
                </article>
            </Container.Flex>
        ): null;
    }

    protected handleClickPrev(ev: React.SyntheticEvent<HTMLButtonElement>): void {
        this.setState((state, props) => ({ firstImgIndex: state.firstImgIndex - 1 }));
    }

    protected handleClickNext(ev: React.SyntheticEvent<HTMLButtonElement>): void {
        this.setState((state, props) => ({ firstImgIndex: state.firstImgIndex + 1 }));
    }
}
```
