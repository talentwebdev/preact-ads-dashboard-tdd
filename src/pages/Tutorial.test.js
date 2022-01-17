import {shallow} from 'enzyme';
import Tutorial from './Tutorial';

describe('Tutorial', () => {
    let tutorialContainer;

    beforeEach(() => tutorialContainer = shallow(<Tutorial />));

    test('should render the div element', () => {
        expect(tutorialContainer.find('div').length).toBeGreaterThanOrEqual(1);
    });
});