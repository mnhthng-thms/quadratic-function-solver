const sanitise = function (inputString) {
  const validChars = '0123456789.';
  const sign = (function () {
    if (inputString[0] === '-') {
      return false;
    } else if (inputString[0] === '+') {
      return true;
    } else {
      return true;
    }
  })();

  const processed = inputString
    .split('')
    .filter(char => validChars.indexOf(char) >= 0)
    .join('');

  const whereTheDotIs = processed.indexOf('.');
  const processedWithOnlyOneDot = processed
    .split('')
    .filter((char, idx) => (char !== '.' || idx === whereTheDotIs))
    .join('');

  const returnedString = (whereTheDotIs > 0) ? processedWithOnlyOneDot : processed;
  const messageToUser = (validChars.length === returnedString.length) ?
    '◃┆◉◡◉┆▷ Please truth me when I said that you dont have to keep the input field clean!' :
    'Having fun with math, aren\'t you? (づ￣ ³￣)づ'
  const returnedFloatWithoutSign = (returnedString.length > 0) ?
    (!!parseFloat(returnedString) ? parseFloat(returnedString) : 0) :
    0;
  const returnedFloat = (!!sign) ? returnedFloatWithoutSign : -returnedFloatWithoutSign;

  return { returnedFloat, messageToUser };
}

var quadratic = function (...params) {
  const [a, b, c] = params;
  const deltaValue = b * b - 4 * a * c;

  const showRoots = function () {
    if (a == 0) {
      if (b === 0) {
        return (c == 0) ? true : false;
      }
      else {
        return [-c / b];
      }
    }
    else {
      if (deltaValue < 0) {
        return false;
      }
      else if (deltaValue == 0) {
        return [-b / (2 * a)];
      }
      else {
        return [-(b + Math.sqrt(deltaValue)) / (2 * a),
        -(b - Math.sqrt(deltaValue)) / (2 * a)];
      }
    }
  }

  const getNumberOfRoots = function () {
    const allRoots = showRoots();
    if (allRoots.constructor === Array) {
      return allRoots.length;
    }
    else if (allRoots) {
      return 'infinite';
    }
    else if (!allRoots) {
      return 0;
    }
  }

  return {
    isQuad: !(a === 0),
    delta: () => deltaValue,
    showRoots,
    getNumberOfRoots
  }
}
