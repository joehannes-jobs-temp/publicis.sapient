- Book 5: The First `reel` component

`Prudencss` comes with a pretty neat predefined and configurable `css-button-component`.
Let's integrate that into React in a rather generic manner - so, I hope you don't mind -
and I shall be able to contribute that component to my `@prudencss/react-components` sidekick-project.
[components/Button.tsx](#Generic-Button "save:")

## Generic Button

We already got a `testrun` in our `git history #b775cb07f9b5225e3c18c834b110dc9c28aafa01` or so ...

```tsx
import React from 'react';

import { Disabled as DisabledBehaviour } from '../lib/Behaviours';

import styles from './Button.module.sass';

export interface IProps {
    animation?: string;
    color?: string;
    decoration?: string;
    disabled?: boolean;
    size?: string;
    buttonType?: string;
    onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

interface IState {
}

export class Component extends React.Component<IProps, IState> {
    public render(): React.ReactNode {
        const { onClick, animation, color, decoration, disabled, size, buttonType } = this.props;
        const _disabled: string = disabled ? DisabledBehaviour : '';
        const classList = [animation, color, decoration, size, buttonType, _disabled];
        const optionalDisabledProps = disabled ? { disabled: true, "aria-disabled": true } : {};

        return (
            <button
                className={`${styles.c_btn} ${disabled ? 'disabled' : ''} c-btn ${classList.join(' ')}`}
                {...optionalDisabledProps}
                onClick={onClick}
            >
                {this.props.children}
            </button >
        );
    }
}

```

Now we define our additional Button styles as per specs ...
[components/Button.module.sass](#Button-Styles "save:")

## Button Styles

```sass
.c_btn
  &:first-of-type
    border-top-left-radius: 1rem
    border-bottom-left-radius: 1rem
  &:last-of-type
    border-top-right-radius: 1rem
    border-bottom-right-radius: 1rem

  &.disabled
    background-color: grey

```

Now that we got our buttons in place, let's test if they work ...
[specs/component/Button.spec.tsx](#Specs "save:")


## Specs

```tsx
import { Button } from '../../components';
import * as Behaviours from '../../lib/Behaviours';

describe('The Button.Component Component', function() {
    it('renders an unstyled button without crashing', () => {
        const button = mount(
            <Button.Component
                onClick={() => false}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.find('.c-btn').length).toBe(1);
    });

    it('renders a styled button correctly regarding content', () => {
        const button = render(
            <Button.Component
                onClick={() => false}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.text()).toEqual('hello sapients!');
    });

    it('has the ~animation~ prop transformed to a CSS class', () => {
        const button = shallow(
            <Button.Component
                onClick={() => false}
                animation={Behaviours.Animation.Ripple}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.is('.a-ripple')).toBe(true);
    });

    it('has the ~color~ prop transformed to a CSS class', () => {
        const button = shallow(
            <Button.Component
                onClick={() => false}
                color={(Behaviours.ComponentColor.Primary as unknown as Function)('btn')}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.is('.c-btn--primary')).toBe(true);
    });

    it('has the ~decoration~ prop transformed to a CSS class', () => {
        const button = shallow(
            <Button.Component
                onClick={() => false}
                decoration={Behaviours.Decoration.Discrete}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.is('.u-shadow--discrete')).toBe(true);
    });

    it('has the ~size~ prop transformed to a CSS class', () => {
        const button = shallow(
            <Button.Component
                onClick={() => false}
                size={(Behaviours.ComponentSize.Medium as unknown as Function)('btn')}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.is('.c-btn--medium')).toBe(true);
    });

    it('has the ~buttonType~ prop transformed to a CSS class', () => {
        const button = shallow(
            <Button.Component
                onClick={() => false}
                buttonType={Behaviours.ButtonType.Fab}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.is('.c-btn--fab')).toBe(true);
    });

    it('has the ~disabled~ prop transformed to a dom prop', () => {
        const button = shallow(
            <Button.Component
                onClick={() => false}
                disabled={true}
            >
                hello sapients!
          </Button.Component>
        );
        expect(button.find('button')).toBeDisabled();
    });

    it('has the ~onClick~ prop transformed/connected to the proper UX-event', () => {
        const handler = {
          click: jest.fn(), 
        };
        const button = shallow(
            <Button.Component
                onClick={handler.click}
            >
                hello sapients!
          </Button.Component>
        );
        let spy = jest.spyOn(handler, 'click');

        button.find('button').simulate('rawuzi');
        expect(spy).toHaveBeenCalled();
    });
});

```

