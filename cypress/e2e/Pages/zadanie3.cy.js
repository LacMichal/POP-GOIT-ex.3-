import { HomePage } from './HomePage';
import { LogIn, LogOut } from './Login_Logout';

const homePage = new HomePage();
const logIn = new LogIn();
const logOut = new LogOut();

describe('Test object pattern', () => {
  beforeEach(() => {
    homePage.navigateToPage();
  });

  it('Test 1', () => {
    logIn.inputEmail('user888@gmail.com');
    logIn.inputPassword('1234567890');
    logIn.clickLogIn();
    logOut.openBurgerMenu();
    logOut.clickLogOut();
  });

  it('Test 2', () => {
    logIn.inputEmail('testowyqa@qa.team');
    logIn.inputPassword('QA!automation-1');
    logIn.clickLogIn();
    logOut.openBurgerMenu();
    logOut.clickLogOut();
  });
});