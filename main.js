$(document).ready(function () {
  $("#top_left").click(function () {
    $("h2").text("Top Left");
  });

  $("#top_right").click(function () {
    $("h2").text("Top Right");
  });

  $("#top").click(function () {
    $("h2").text("Top");
  });

  $("#left").click(function () {
    $("h2").text("Left");
  });

  $("#center").click(function () {
    $("h2").text("Center");
  });

  $("#right").click(function () {
    $("h2").text("Right");
  });

  $("#bottom_left").click(function () {
    $("h2").text("Bottom Left");
  });

  $("#bottom").click(function () {
    $("h2").text("Bottom");
  });

  $("#bottom_right").click(function () {
    $("h2").text("Bottom Right");
  });
});
