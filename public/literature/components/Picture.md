- Book 6: A Picture-Frame

Let's get creative and concoct something fancy: useful and beautiful at the same time :kissing_smiling_eyes:
[components/Picture.tsx](#Picture-Frame "save:")


## Picture Frame

```tsx
import React from 'react';

import styles from './Picture.module.sass';

export interface IProps {
  imgUrl: string;
  picNr: number;
  handlePrev?: (ev: React.SyntheticEvent<any>) => void;
  handleNext?: (ev: React.SyntheticEvent<any>) => void;
}

interface IState {
}

export class Component extends React.Component<IProps, IState> {
    public render(): React.ReactNode {
        const { imgUrl, picNr, handlePrev, handleNext } = this.props;

        return (
            <article className={`${styles.container} o-crop`}>
              <section className={`{styles.img} o-crop__content o-crop__content--center u-bg-color--secondary`}>
                <img src={imgUrl}/>
              </section>
              <section className={`${styles.counter} o-crop__content o-crop__content--left u-font-family--accent u-bg-color--accent`}>
                {picNr}
              </section>
              <section className={`${styles.prev} u-hidden--from-medium o-crop__content o-crop__content--left`} onClick={handlePrev}></section>
              <section className={`${styles.next} u-hidden--from-medium o-crop__content o-crop__content--right`} onClick={handleNext></section>
            </article>
        );
    }
}

```

Now let's add style again
[components/Picture.module.sass](#Picture-Style "save:")


## Picture Style

```sass
.counter
  margin: 0;
  padding: .3rem
  border-width: 1px;
  border-style: groove;
  transform: rotateZ(-45deg)
  &:after
    position: absolute
    top: 0
    left: 0
    content: ' '
    border-width: calc(100%/3)
    border-height: calc(100%/3)
    border-right-width: 0;
    border-bottom-width: 0;
    background-color: rgba(ivory, .1);
.img
  max-width: 100%
  max-height: 100%
  background-image: url(/assets/connectowork.png)
  &> img
    width: 128px
    height: auto
.prev, .next
  width: 50%
  height: 50%
  margin-top: 50%
  transform: translateY(-50%)
  background-image: url(/assets/arrow.svg)
  border-radius: 50%
.prev
  transform: rotate(180deg)

```

