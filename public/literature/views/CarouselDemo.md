- Book 3: The Primary View

Though we got no routing and lack multiple pages in this `pseudo-SPA` I'll go ahead
and create another wrapper for our (as of now) only view.
[views/CarouselDemo.tsx](#Carousel-View "save:")

## Carousel View

We'll now utilize the Flex-Container we created in [Book 2](public/literature/components/FlexContainer.md).

```tsx
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
```
