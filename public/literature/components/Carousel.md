- Book 7: A merry go round :smile:

Slowly things are coming together

I'll reuse the crop-css-pattern for centering the picture-container and
put another container in there that adheres to the pack-css-pattern

[components/Carousel.tsx](#Carousel "save:")


## Carousel

```tsx
import React from 'react';

import { Picture } from '.';

import styles from './Carousel.module.sass';

export interface IProps {
  currentStart: number;
  data: string[];
}

interface IState {
}

export class Component extends React.Component<IProps, IState> {
    public imgCount = 7;

    public render(): React.ReactNode {
        const { data, currentStart } = this.props;

        return (
            <article aria-label="gallery" className={`${container_outer} o-crop`}>
                <section className={`${container_inner} o-crop__content 0-crop__content--center o-pack`}>
                    {data.filter((d, i) => (i >= currentStart && i < imgCount + currentStart)).map((dataSet, i) => {
                        <Picture.Component
                            imgUrl={dataSet.imgUrl}
                            picNr={i}
                        />
                    })}
                </section>
            </article>
        );
    }
}
```
