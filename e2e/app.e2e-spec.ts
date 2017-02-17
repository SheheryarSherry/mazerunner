import { MazerunnerPage } from './app.po';

describe('mazerunner App', function() {
  let page: MazerunnerPage;

  beforeEach(() => {
    page = new MazerunnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
