import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from "./triangle";

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var s1 = parseInt($("input#s1").val());
    var s2 = parseInt($("input#s2").val());
    var s3 = parseInt($("input#s3").val());
    var userTriangle = new Triangle(s1,s2,s3);
    $("#output").text(result):
  });
});  