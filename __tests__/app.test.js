import App from '@/app';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  it('should have a play method', () => {
    expect(app.play).toBeDefined();
  });
});
