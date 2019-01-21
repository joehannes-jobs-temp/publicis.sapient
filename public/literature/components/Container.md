- Book 2: The Container

The container [components/Container.tsx](#Container "save:") is 
- as of semantics a `<main/>`-tag
- as of style-tech a `flex-element`
- as of mobile first `media-query-driven`

Because
- work should be fun
- sometimes it's good to employ the creative side of the brain and give logic a break
- … and so on
we will also create a dedicated module.css file: [components/Flex.module.sass](#Container-Styling "save:")

## Container

This is the main container components file.

```tsx
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
```

## Container Styling

```sass
.bg_pattern_web_darkly
  background-image: url('/assets/connectwork.png')
  background-blend-mode: difference
```

