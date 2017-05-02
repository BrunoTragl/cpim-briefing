import { CpimBriefingPage } from './app.po';

describe('cpim-briefing App', () => {
  let page: CpimBriefingPage;

  beforeEach(() => {
    page = new CpimBriefingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
