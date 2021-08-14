interface Roman {
  symbol: string;
  value: number;
}

const romans: Roman[] = [
  { symbol: 'I', value: 1 },
  { symbol: 'V', value: 5 },
  { symbol: 'X', value: 10 },
  { symbol: 'L', value: 50 },
  { symbol: 'C', value: 100 },
  { symbol: 'D', value: 500 },
  { symbol: 'M', value: 1000 },
];

function intToRoman(num: number): string {
  const reversedRomans = [...romans].reverse();

  const roman = reversedRomans.reduce(
    (roman, currentReversedRoman, index) => {
      roman = toRoman(roman, currentReversedRoman);

      const subtraction = getSubtraction(currentReversedRoman, index);

      if (subtraction) {
        roman = toRoman(roman, subtraction);
      }

      return roman;
    },
    { symbol: '', value: num },
  );

  return roman.symbol;

  function toRoman(base: Roman, comparisonTarget: Roman) {
    const _base = { ...base };
    if (comparisonTarget.value <= _base.value) {
      _base.symbol += comparisonTarget.symbol.repeat(_base.value / comparisonTarget.value);
      _base.value = _base.value % comparisonTarget.value;
    }

    return _base;
  }

  function getSubtraction(currentRoman: Roman, index: number): Roman | null {
    const subtractionIndex = index + (index % 2 == 0 ? 2 : 1);

    if (subtractionIndex >= romans.length) {
      return null;
    }

    const subtraction = {
      symbol: reversedRomans[subtractionIndex].symbol + currentRoman.symbol,
      value: currentRoman.value - reversedRomans[subtractionIndex].value,
    };

    return subtraction;
  }
}
