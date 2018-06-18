class MatchScore {
  render() {
    // set title
    document.getElementById("title").innerText = "Match Score Sheet";

    let main = document.getElementById("main");

    let inner = "";

    inner += '<table>';
    inner += '  <tr>';
    inner += '    <td>Winner</td>';
    inner += '    <td>Player</td>';
    inner += '    <td>Game 1</td>';
    inner += '    <td>Game 2</td>';
    inner += '    <td>Game 3</td>';
    inner += '    <td>Default</td>';
    inner += '  </tr>';
    inner += '  <tr>';
    inner += '    <td><input type="checkbox"></td>';
    inner += '    <td>Player A</td>';
    inner += '    <td><input type="text" maxlength="2" size="2"></td>';
    inner += '    <td><input type="text" maxlength="2" size="2"></td>';
    inner += '    <td><input type="text" maxlength="2" size="2"></td>';
    inner += '    <td><input type="checkbox"></td>';
    inner += '  </tr>';
    inner += '  <tr>';
    inner += '    <td><input type="checkbox"></td>';
    inner += '    <td>Player B</td>';
    inner += '    <td><input type="text" maxlength="2" size="2"></td>';
    inner += '    <td><input type="text" maxlength="2" size="2"></td>';
    inner += '    <td><input type="text" maxlength="2" size="2"></td>';
    inner += '    <td><input type="checkbox"></td>';
    inner += '  </tr>';
    inner += '</table>';
    inner += '<input type="button" onclick="matchScore.cancel()" value="Cancel">';
    inner += '<input type="button" onclick="matchScore.save()" value="Save">';
    
    main.innerHTML = inner;
  }

  cancel() {
    console.log("cancel score");
  }

  save() {
    console.log("save score");
  }
}
