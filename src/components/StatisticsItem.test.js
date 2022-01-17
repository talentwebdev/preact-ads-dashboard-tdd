import { shallow } from 'enzyme';
import StatisticsItem from './StatisticsItem';

describe('StatisticsItem', () => {
    let statisticsItemWrapper;
    beforeAll(() => {
        statisticsItemWrapper = shallow(<StatisticsItem />);
    });

    it('renders elements', () => {
        expect(statisticsItemWrapper.find('div')).toHaveLength(8);
    });
});