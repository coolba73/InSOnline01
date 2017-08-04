import { InSOnline01Page } from './app.po';

describe('in-sonline01 App', () => {
  let page: InSOnline01Page;

  beforeEach(() => {
    page = new InSOnline01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
