import { MycartPage } from './app.po';

describe('mycart App', () => {
  let page: MycartPage;

  beforeEach(() => {
    page = new MycartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
