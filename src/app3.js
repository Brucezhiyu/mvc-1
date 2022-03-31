import $ from "jquery";

const $square = $("#app3 .square");

$square.on("click", () => {
  $square.toggleClass("active"); //如果没就加，如果有就删掉class
});
