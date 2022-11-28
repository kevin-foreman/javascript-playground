function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here

  if (score === 93 || score === 94 || score === 95 || score === 96 || score === 97 && (!(score > 100))) {
    return 'A';
  } else if (score === 90 || score === 91 || score === 92 && (!(score > 100))) {
    return 'A-';
  } else if (score === 98 || score === 99 || score === 100 && (!(score > 100))) {
    return 'A+';
  }

  else if (score === 83 || score === 84 || score === 85 || score === 96 || score === 87 && (!(score > 100))) {
    return 'B';
  } else if (score === 80 || score === 81 && (!(score > 100))) {
    return 'B-';
  } else if (score === 88 || score === 89 || score === 90 && (!(score > 100))) {
    return 'B+';
  }

  else if (score === 73 || score === 74 || score === 75 || score === 76 || score === 77 && (!(score > 100))) {
    return 'C';
  } else if (score === 70 || score === 71 && (!(score > 100))) {
    return 'C-';
  } else if (score === 78 || score === 79 || score === 80 && (!(score > 100))) {
    return 'C+';
  }

  else if (score === 63 || score === 64 || score === 65 || score === 66 || score === 67 && (!(score > 100))) {
    return 'D';
  } else if (score === 60 || score === 61 && (!(score > 100))) {
    return 'D-';
  } else if (score === 68 || score === 69 || score === 70 && (!(score > 100))) {
    return 'D+';
  }

  else if (score === 59 || score >= 0 && (!(score > 100))) {
    return 'F';
  } else if (score > 100 || score < 0) {
    return 'INVALID SCORE'
  }
};

var output = convertScoreToGradeWithPlusAndMinus(79);
console.log(output); // --> 'A-'