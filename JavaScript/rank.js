let results_per_page = 5;
let error=$('<div>');
        error
          .text("ERROR")
          .addClass('display')
          .appendTo('#error')

  function loadRepos() {
    let url = "http://192.168.0.102:8080/ranking.json"
    $.ajax({ url,
      success: displayRepos,
      error: displayError
    });  
    

 function displayRepos(data) {
  let page_numb = 1;
        let results_counter = 0;
        for (let index in data.ranking){
          if(results_counter >= results_per_page){
            page_numb++;
            results_counter = 0
          }
          results_counter++;

          let table_row = $('<tr class="page-' + page_numb + '">');
          let rank = $('<td class="rank">').text(index);
          let img = $('<img src="name.png">').css('width', '50px')
          let name = $('<td class="name">').text(data.ranking[index].name);
          let club = $('<td class="club">').text(data.ranking[index].club);
          let level = $('<td class="level">').text(data.ranking[index].level);
          let experience = $('<td class="experience">').text(data.ranking[index].experience);
          let messages =  $('<td class="messages">').html('<i class="far fa-envelope"></i>');

          table_row.append(rank).append(img).append(name).append(club).append(level).append(experience).append(messages);

          if(page_numb > 1){
            table_row.hide();
          }
          $("#table_ranking > tbody").append(table_row);

        }

        console.log(data);
      }
}



function displayError(err) {
  $("#error").css('display');
  console.log(err)
}


displayRepos()
loadRepos()
displayRepos(data)
displayError(err)


