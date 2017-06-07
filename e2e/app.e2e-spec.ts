import { TourappPage } from './app.po';

describe('tourapp App', () => {
  let page: TourappPage;

  beforeEach(() => {
    page = new TourappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
