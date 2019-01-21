import App from '../App';

describe('The App Container', function() {
    it('renders without crashing', () => {
      const app = mount(<App/>);
      expect(app).toContainMatchingElement('main');
    });
});
