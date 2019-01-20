import React from 'react';

import FlexContainer from './components';
import Carousel from './components';
import { fetchImgs } from './HTTPService.ts';

const carouselProps: Carousel.IProps = {
  src: fetchImgs,
};

export default class extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <FlexContainer.Component>
                <h3>Carousel Test</h3>
                <Carousel.Component {...carouselProps} />
            </FlexContainer.Component>
        );
    }
}
