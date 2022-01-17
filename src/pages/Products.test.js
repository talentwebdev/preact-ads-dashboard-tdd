import {shallow} from 'enzyme';
import Products from './Products';

describe('Product', () => {
    let productsContainer;

    beforeEach(() => productsContainer = shallow(<Products />));

    it('should render the div element', () => {
        expect(productsContainer.find('div')).toBeTruthy();
    });
});