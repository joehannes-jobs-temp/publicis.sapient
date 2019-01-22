import React from 'react';

import { Container } from '../components';
import { Button, Carousel } from '../components';

import * as Behaviours from '../lib/Behaviours';

import PixabayService from '../services/PixabayService';

export interface IProps {
}

interface IState {
  firstImgIndex: number;
  dataReady: boolean;
  carouselData: string[];
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
        carouselData: [],
      };

      PixabayService.fetch(['nerd', 'geek'])
        .then(response => response.json())
        .then(json => json.hits.map((dataSet: any) => dataSet.webformatURL))
        .then(imgArray => this.setState({
          carouselData: Array.from(imgArray),
          dataReady: true,
        }));
    }

    public render(): React.ReactNode {
        const { carouselData, firstImgIndex, dataReady } = this.state;

        return dataReady ? (
            <Container.Flex>
                <header className="u-align--center-xs u-align--left-s">
                    <h3>Carousel Test</h3>
                </header>
                <Carousel.Component
                  data={carouselData}
                  currentStart={firstImgIndex}
                />
                <article aria-label="control" className={`u-align--center`}>
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
        ): (
          <h3>Loading … hang on tight</h3>
        );
    }

    protected handleClickPrev = (ev: React.SyntheticEvent<HTMLButtonElement>): void => {
        this.setState((state, props) => ({ firstImgIndex: state.firstImgIndex - 1 }));
    }

    protected handleClickNext = (ev: React.SyntheticEvent<HTMLButtonElement>): void => {
        this.setState((state, props) => ({ firstImgIndex: state.firstImgIndex + 1 }));
    }
}
