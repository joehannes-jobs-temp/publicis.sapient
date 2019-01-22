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
    public imgCount = 5;

    public render(): React.ReactNode {
        const { data, currentStart } = this.props;
        console.log(data);
        return (
            <article aria-label="gallery" className={`${styles.container_outer} o-crop`}>
                <section className={`${styles.container_inner} o-crop__content 0-crop__content--center o-pack`}>
                    {data.filter((d, i) => (i >= currentStart && i < this.imgCount + currentStart)).map((imgUrl, i) => {
                        console.log(imgUrl);
                        return (
                          <Picture.Component
                              imgUrl={imgUrl}
                              picNr={i}
                              key={`pic_nr${i}`}
                              className="o-pack__item"
                          />
                        );
                    })}
                </section>
            </article>
        );
    }
}
