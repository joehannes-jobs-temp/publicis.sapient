import React from 'react';

import styles from './Picture.module.sass';

export interface IProps {
  imgUrl: string;
  picNr: number;
  className: string;
  handlePrev?: (ev: React.SyntheticEvent<any>) => void;
  handleNext?: (ev: React.SyntheticEvent<any>) => void;
}

interface IState {
}

export class Component extends React.Component<IProps, IState> {
    public render(): React.ReactNode {
        const { imgUrl, picNr, handlePrev, handleNext, className } = this.props;

        return (
            <article className={`${styles.container} o-crop ${className}`}>
              <section className={`{styles.img} o-crop__content o-crop__content--center u-bg-color--secondary`}>
                <img src={imgUrl}/>
              </section>
              <section className={`${styles.counter} o-crop__content o-crop__content--left u-font-family--accent u-bg-color--accent`}>
                {picNr}
              </section>
              <section className={`${styles.prev} u-hidden--from-medium o-crop__content o-crop__content--left`} onClick={handlePrev}></section>
              <section className={`${styles.next} u-hidden--from-medium o-crop__content o-crop__content--right`} onClick={handleNext}></section>
            </article>
        );
    }
}
