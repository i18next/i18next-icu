// shim intl
var Intl = require('intl');
require('intl/locale-data/jsonp/en.js')
global.Intl = Intl;

import ICU from '../src/';
import i18next from 'i18next';


describe('icu format', () => {

  describe('basic parse', () => {
    let icu;

    before(() => {
      icu = new ICU();
    });


    it('should parse', () => {
      const str =
      'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}';

      expect(icu.parse(str, { numPhotos: 1000 }, 'en', 'ns')).to.eql('You have 1,000 photos.');
    });

  });

  describe('with i18next', () => {

    before(() => {
      const str =
      'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}';

      i18next
        .use(ICU)
        .init({
          lng: 'en',
          resources: {
            en: {
              translation: {
                'key': str
              }
            }
          }
        });
    });

    it('should parse', () => {
      expect(i18next.t('key', { numPhotos: 1000 })).to.eql('You have 1,000 photos.');
      expect(i18next.t('key', { numPhotos: 2000 })).to.eql('You have 2,000 photos.');
    });

  });

});
