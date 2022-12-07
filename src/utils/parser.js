function parse(tokens) {
  const correctSyntax = [
    [
      "<data_type>",
      "<identifier>",
      "<assignment_operator>",
      "<value>",
      "<delimiter>",
    ],
    ["<data_type>", "<identifier>", "<delimiter>"],
  ];

  let state = false;

  if (tokens.length > correctSyntax[0].length) return false;

  for (let syntax of correctSyntax) {
    for (let j = 0; j < syntax.length; j++) {
      try {
        state = tokens[j] === syntax[j];
        if (!state) break;
      } catch (e) {
        state = false;
      }
    }
    if (state) {
      break;
    }
  }
  return state;
}

export default parse;
