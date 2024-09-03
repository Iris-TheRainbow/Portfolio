function generateAsignments() {
    let string = '';
    fetch('/asignments.json')
      .then(res => res.json())
      .then(json => {
        for (let i = 0; i < json.asignments.length; i++) {
          string += '<div>';
            string += '<div>';
                string += '<h2>';
                    string += json.asignments[i].name;
                string += '</h2>';
                string += '<p>';
                    string += json.asignments[i].description;
                string += '</p>';
            string += '</div>';
          if (json.asignments[i].images.length > 1) {
            string += '<div class="long">';
            for (let j = 0; i < json.asignments[i].images.length; i++) {
              string +=
                '<img src="' +
                json.asginments[i].images[j] +
                ' " style="width: calc(' +
                String((1 / json.asignments[i].images.length) * 100 - 1) +
                '% - 10px);">';
            }
            string += '</div>';
          } else {
            string += '<div class="short">';
                string += json.asignments[i].images[0];
            string += '</div>';
          }
          string += '</div>';
        }
      })
      .catch(e => console.error(e));
  }
  