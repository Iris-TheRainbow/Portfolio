function generateAssignments() {
    let string = '';
    let short = "";
    fetch('/assignments.json')
      .then(res => res.json())
      .then(json => {
        for (let i = 0; i < json.assignments.length; i++) {
          let assignment = json.assignments[i]
          if (assignment.images.length == 1){
            short = 'class="short"'
          } else {
            short = ""
          }
          console.log(short)
          string += '<div class="asignment">';
            string += '<div ' + short + '>';
                string += '<h2>';
                    string += assignment.name;
                string += '</h2>';
                string += '<p>';
                    string += assignment.description;
                string += '</p>';
            string += '</div>';
          if (assignment.images.length > 1) {
            string += '<div class="long">';
            for (let j = 0; j < assignment.images.length; j++) {
              string +=
                '<img src="img/' +
                assignment.images[j] +
                '.png" style="width: calc(' +
                String((1 / assignment.images.length) * 100 - 1) +
                '% - 10px);">';
            }
            string += '</div>';
          } else {
            string += '<div class="short">';
                string += '<img src="img/' + assignment.images[0] + '.png">';
            string += '</div>';
          }
          string += '</div>';
        }
      console.log(string)
      document.getElementById("assignments").innerHTML = string
      })
      .catch(e => console.error(e));
  }
  