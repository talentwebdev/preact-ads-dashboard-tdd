import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {
    let contactContainer;

    beforeEach(() => contactContainer = shallow(<Contact/>));

    it('should render the div element', () => {
        expect(contactContainer.find('div').length).toBeGreaterThanOrEqual(1);
    });
});