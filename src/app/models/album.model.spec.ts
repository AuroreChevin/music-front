import { Album } from './album.model';
import { BandName } from './band-name.model';
import { MusicalGenre } from './musicalgenre.model';

describe('Album', () => {
  it('should create an instance', () => {
    expect(new Album(0,'',0, new MusicalGenre(0,''), new BandName(0, '',''))).toBeTruthy();
  });
});
