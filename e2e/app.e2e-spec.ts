import { CreeperPage } from './app.po';

describe('creeper App', function() {
  let page: CreeperPage;

  beforeEach(() => {
    page = new CreeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
