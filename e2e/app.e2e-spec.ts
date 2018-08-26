import { EduaustopPage } from './app.po';

describe('eduaustop App', function() {
  let page: EduaustopPage;

  beforeEach(() => {
    page = new EduaustopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
