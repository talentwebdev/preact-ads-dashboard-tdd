import {shallow} from 'enzyme';
import Home from './Home';

describe('Home', () => {
    let homeContainer;

    beforeEach(() => homeContainer = shallow(<Home />));

    it('should render the div element', () => {
        expect(homeContainer.find('div')).toBeTruthy();
    });
})