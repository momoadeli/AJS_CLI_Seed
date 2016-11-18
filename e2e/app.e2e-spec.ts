import { AJSCLISeedPage } from './app.po';

describe('ajs-cli-seed App', function() {
  let page: AJSCLISeedPage;

  beforeEach(() => {
    page = new AJSCLISeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
