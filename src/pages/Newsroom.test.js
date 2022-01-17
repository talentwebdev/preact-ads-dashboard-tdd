import {shallow} from 'enzyme';
import Newsroom from './Newsroom';

describe('Newsroom', () => {
    let newsroomContainer;

    beforeEach(() => newsroomContainer = shallow(<Newsroom />));

    it('should render the div element', () => {
        expect(newsroomContainer.find('div')).toBeTruthy();
    });
});