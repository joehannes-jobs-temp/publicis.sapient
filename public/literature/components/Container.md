- Book 2: The Container

The container [components/Container.tsx](#Container "save:") is 
- as of semantics a `<main/>`-tag
- as of style-tech a `flex-element`
- as of mobile first `media-query-driven`

Because
- work should be fun
- sometimes it's good to employ the creative side of the brain and give logic a break
- … and so on
we will also create a dedicated module.css file: [components/Container.module.sass](#Container-Styling "save:")

## Container

This is the main container components file.

```tsx
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
```

## Container Styling

```sass
.bg-pattern-web-darkly
  background-image: url('/assets/connectwork.png')
  background-blend-mode: multiply
```

