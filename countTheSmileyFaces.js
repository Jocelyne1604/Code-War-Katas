function countSmileys(arr) {
  const eyes = {
    ":": true,
    ";": true
  };

  const noses = {
    "-": true,
    "~": true
  };

  const mouths = {
    ")": true,
    D: true
  };

  return arr.reduce((count, face) => {
    if (face.length == 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      }
    } else if (face.length == 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
        count++;
      }
    }
    return count;
  }, 0);
}
