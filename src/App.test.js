import App from './App';
import {shallow} from 'enzyme';
import MainNav from './components/MainNav';
import Home from './pages/Home';
describe('App', () => {
  let appContainer;

  beforeEach(() => appContainer = shallow(<App />));

  it('should render the div element', () => {
    expect(appContainer.find('div').length).toBeGreaterThanOrEqual(1);
  });


  it('should render the <MainNav />', () => {
    expect(appContainer.containsMatchingElement(<MainNav />)).toEqual(true);
  });

  test('should render the Routes', () => {
    expect(appContainer.find('Routes')).toBeTruthy();
  });

});
