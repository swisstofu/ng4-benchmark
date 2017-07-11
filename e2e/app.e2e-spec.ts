import { Ng4BenchmarkPage } from './app.po';

describe('ng4-benchmark App', () => {
  let page: Ng4BenchmarkPage;

  beforeEach(() => {
    page = new Ng4BenchmarkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
