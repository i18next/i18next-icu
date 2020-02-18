// shim intl
var Intl = require('intl');
require('intl/locale-data/jsonp/en.js')
require('intl/locale-data/jsonp/ar.js')
//require('intl-messageformat/dist/locale-data/ar.js');
global.Intl = Intl;
import ICU from '../src/';
import i18next from 'i18next';
import ar from '../locale-data/ar';

describe('icu format', () => {

  describe('basic parse', () => {
    let icu;

    beforeEach(() => {
      icu = new ICU({ localeData: ar });
      // icu.addLocaleData(ar);
    });


    it('should parse', () => {
      const str =
      'You have {numPhotos, plural, ' +
        '=0 {no photos.}' +
        '=1 {one photo.}' +
        'other {# photos.}}';

      expect(icu.parse(str, { numPhotos: 1000 }, 'en', 'ns', 'key')).toEqual('You have 1,000 photos.');
    });

    it('should parse (AR)', () => {
      const str = '{ numVar, plural, zero {Got # zero} one {Got # one} two {Got # two} few {Got # few} many {Got # many} other {Got # other}}';

      expect(icu.parse(str, { numVar: 1000 }, 'ar-AR', 'ns', 'key')).toEqual('Got ١٬٠٠٠ other');
      expect(icu.parse(str, { numVar: 2 }, 'ar-AR', 'ns', 'key')).toEqual('Got ٢ two');
      expect(icu.parse(str, { numVar: 1 }, 'ar-AR', 'ns', 'key')).toEqual('Got ١ one');
    });

  });

  describe('with formatter', () => {
    let icu;
    const formats = {
      number: {
        THREE_FRACTION_DIGITS: {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        },
        ROUGH: {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        },
      }
    };

    beforeEach(() => {
      icu = new ICU({
        // or
        // formats
      });

      // or
      icu.addUserDefinedFormats(formats)
    });


    it('should parse with custom format', () => {
      const str1 = 'number formatting {value, number, THREE_FRACTION_DIGITS}.';
      expect(icu.parse(str1, { value: 0.333333 }, 'en', 'ns', 'key1')).toEqual('number formatting 0.333.');

      const str2 = 'number formatting {value, number, ROUGH}.';
      expect(icu.parse(str2, { value: 0.444444 }, 'en', 'ns', 'key2')).toEqual('number formatting 0.4.');

      expect(icu.parse(str1, { value: 0.333333 }, 'en', 'ns', 'key1')).toEqual('number formatting 0.333.');
      expect(icu.parse(str2, { value: 0.444444 }, 'en', 'ns', 'key2')).toEqual('number formatting 0.4.');
    });
  });

  describe('with i18next', () => {

    beforeEach(() => {
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
      expect(i18next.t('key', { numPhotos: 1000 })).toEqual('You have 1,000 photos.');
      expect(i18next.t('key', { numPhotos: 2000 })).toEqual('You have 2,000 photos.');
    });

  });

});
