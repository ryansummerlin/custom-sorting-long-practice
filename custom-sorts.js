function ageSort(users) {
  const ageCompare = function(a, b) {
    return a.age - b.age;
  }
  return users.sort(ageCompare);
}

function oddEvenSort(arr) {
  const oddEvenCompare = function(a, b) {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  }

  return arr.sort(oddEvenCompare);
}

function validAnagrams(s, t) {
  let sSorted = s.split('').sort().join('');
  let tSorted = t.split('').sort().join('');

  return sSorted === tSorted;
}

function reverseBaseSort(arr) {
  strArr = arr.map(num => num.toString());

  const reverseBaseCompare = function(a, b) {
    if (a.length === b.length) {
      return a - b;
    } else {
      return b.length - a.length;
    }
  }

  let strSorted = strArr.sort(reverseBaseCompare);
  return strSorted.map(str => parseInt(str, 10));
}

function frequencySort(arr) {
  let frequency = {};
  arr.forEach(num => {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  });

  const frequencyCompare = function(a, b) {
    if (frequency[a] === frequency[b]) {
      return arr.indexOf(b) - arr.indexOf(a);
    } else {
    return frequency[a] - frequency[b];
    }
  }

  return arr.sort(frequencyCompare);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
