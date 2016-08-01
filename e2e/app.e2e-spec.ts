import { KolsoNewsPage } from './app.po';

describe('kolso-news App', function() {
  let page: KolsoNewsPage;

  beforeEach(() => {
    page = new KolsoNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
