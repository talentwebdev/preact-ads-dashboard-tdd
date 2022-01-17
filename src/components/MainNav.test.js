import {shallow} from 'enzyme';
import MainNav from './MainNav';

describe('MainNav', () => {
    let mainNavContainer;

    beforeEach(() => mainNavContainer = shallow(<MainNav />));

    it('should render the div element', () => {
        expect(mainNavContainer.find('div').length).toBeGreaterThanOrEqual(1);
    });

    it('should render the Link tag', () => {
        expect(mainNavContainer.find('Link').length).toBeGreaterThanOrEqual(1);
    });
});