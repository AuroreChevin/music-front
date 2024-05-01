import { BandName } from './band-name.model';

describe('BandName', () => {
  it('should create an instance', () => {
    expect(new BandName(0, '','')).toBeTruthy();
  });
});
