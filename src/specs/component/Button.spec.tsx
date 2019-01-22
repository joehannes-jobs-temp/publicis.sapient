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
