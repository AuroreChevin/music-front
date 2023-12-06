import { MusicalGenre } from './musicalgenre.model';

describe('Musicalgenre', () => {
  it('should create an instance', () => {
    expect( new MusicalGenre(0,'')).toBeTruthy();
  });
});
