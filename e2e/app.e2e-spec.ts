import { PortafolioAngularPage } from './app.po';

describe('portafolio-angular App', function() {
  let page: PortafolioAngularPage;

  beforeEach(() => {
    page = new PortafolioAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
