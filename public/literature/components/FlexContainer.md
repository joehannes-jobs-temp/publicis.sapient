- Book 2: The Container

The container [components/FlexContainer.tsx](#Flex-Container "save:") is 
- as of semantics a `<main/>`-tag
- as of style-tech a `flex-element`
- as of mobile first `media-query-driven`

Because
- work should be fun
- sometimes it's good to employ the creative side of the brain and give logic a break
- … and so on
we will also create a dedicated module.css file: [components/FlexContainer.module.sass](#Container-Styling "save:")

## Flex Container

```tsx
import React from 'react';

import styles from './FlexContainer.module.sass';

export default class extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <main styleName={styles.bgPattern} className="o-wrapper o-wrapper--from-xs u-bg-color--brand-primary">
                {this.props.children}
            </main>
        );
    }
}
```

## Container Styling

```sass
.bg-pattern
  background-image: url('assets/connectwork.png')
  background-blend-mode: multiply
```

