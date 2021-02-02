$(document).ready(function () {
  //Global variables
  let player = ["X", "O"];
  let activePlayer = 0;
  let winner = false;
  $('#turn').text(player[activePlayer]);

  //Global functions

  //Check if someone won vertical
  let checkVertical = function (char) {
    if (
      $("#1").text() == char &&
      $("#4").text() == char &&
      $("#7").text() == char
    ) {
      return true;
    }

    if (
      $("#2").text() == char &&
      $("#5").text() == char &&
      $("#8").text() == char
    ) {
      return true;
    }

    if (
      $("#3").text() == char &&
      $("#6").text() == char &&
      $("#9").text() == char
    ) {
      return true;
    }

    return false;
  };

  //Check if someone won horizontal
  let checkHorizontal = function (char) {
    if (
      $("#1").text() == char &&
      $("#2").text() == char &&
      $("#3").text() == char
    ) {
      return true;
    }

    if (
      $("#4").text() == char &&
      $("#5").text() == char &&
      $("#6").text() == char
    ) {
      return true;
    }

    if (
      $("#7").text() == char &&
      $("#8").text() == char &&
      $("#9").text() == char
    ) {
      return true;
    }

    return false;
  };

  //Check if someone won diagonal

  let checkDiagonal = function (char) {
    if (
      $("#1").text() == char &&
      $("#5").text() == char &&
      $("#9").text() == char
    ) {
      return true;
    }

    if (
      $("#3").text() == char &&
      $("#5").text() == char &&
      $("#7").text() == char
    ) {
      return true;
    }

    

    return false;
  };

  //New game when button is clicked
  $("button").click(function () {
    $(".tile").each(function () {
      $(this).removeClass("active");
      $(this).text("");
      activePlayer = 0;
      $(".result").text("");
      winner = false;
      $('#turn').text(player[activePlayer]);
    });
  });

  //How every tile must behave
  $(".tile").each(function () {
    //Do this when a tile is clicked
    $(this).click(function () {
      //Only do this if the tile is not active and we do not have a winner
      if (!$(this).hasClass("active") && winner == false) {
        //Mark the clicked tile
        $(this).text(player[activePlayer]);

        //Check if someone has won
        //Vertical
        if (checkVertical(player[activePlayer])) {
          winner = true;
          $(".result").text(`${player[activePlayer]} WINS!`);
        }

        //Horizontal
        if (checkHorizontal(player[activePlayer])) {
            winner = true;
            $(".result").text(`${player[activePlayer]} WINS!`);
          }

        //Diagonal
        if (checkDiagonal(player[activePlayer])) {
            winner = true;
            $(".result").text(`${player[activePlayer]} WINS!`);
          }

        //Change the active player
        if (activePlayer == 0) {
          activePlayer = 1;
        } else {
          activePlayer = 0;
        }
        //Make the tile active
        $(this).addClass("active");

        //Check if we have a tie
        if ($(".active").length == 9 && winner == false) {
          $(".result").text("WE HAVE A TIE");
        }

        //Change the display of who's turn it is
        $('#turn').text(player[activePlayer]);

      }
    });
  });
});
