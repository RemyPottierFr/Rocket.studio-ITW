const findPosition = string => {
  let x = 0;
  let y = 0;
  let arrPosition = [{ x, y }];
  string.map(s => {
    switch (s.charAt(0)) {
      case 'D':
        x += Number(s.slice(1));
        arrPosition.push({ x, y });
        break;
      case 'G':
        x -= Number(s.slice(1));
        arrPosition.push({ x, y });
        break;
      case 'B':
        y -= Number(s.slice(1));
        arrPosition.push({ x, y });
        break;
      case 'H':
        y += Number(s.slice(1));
        arrPosition.push({ x, y });
        break;
    }
  });
  return arrPosition;
};

const checkIntersections = (p1, p2, p3, p4) => {
  const denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
  const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
  const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;

  const x = p1.x + ua * (p2.x - p1.x);
  const y = p1.y + ua * (p2.y - p1.y);

  if (ua > 0 && ua < 1 && ub > 0 && ub < 1 && denominator !== 0) {
    return Math.abs(x) + Math.abs(y);
  } else {
    return false;
  }
};

const findIntersection = (arr1, arr2) => {
  const shotArrLength = arr1.length > arr2.length ? arr1 : arr2;
  const longArrLength = arr1.length > arr2.length ? arr2 : arr1;
  const intersections = [];
  for (let i = 0; i < longArrLength.length - 1; i++) {
    for (let j = 0; j < shotArrLength.length - 1; j++) {
      const intersectionPos = checkIntersections(
        longArrLength[i],
        longArrLength[i + 1],
        shotArrLength[j],
        shotArrLength[j + 1],
      );
      if (intersectionPos) {
        intersections.push(intersectionPos);
      }
    }
  }
  return intersections;
};

const findManathanDistance = (string1, string2) => {
  const string1Pos = findPosition(string1);
  const string2Pos = findPosition(string2);
  return Math.min.apply(0, findIntersection(string1Pos, string2Pos));
};

export default findManathanDistance;
