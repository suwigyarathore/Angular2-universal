import { MyUnivAppPage } from './app.po';

describe('my-univ-app App', function() {
  let page: MyUnivAppPage;

  beforeEach(() => {
    page = new MyUnivAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
