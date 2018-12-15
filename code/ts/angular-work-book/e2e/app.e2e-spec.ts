import { AngularWorkBookPage } from './app.po';

describe('angular-work-book App', function() {
  let page: AngularWorkBookPage;

  beforeEach(() => {
    page = new AngularWorkBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
