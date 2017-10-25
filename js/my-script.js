/**
 * Created by Роман on 25.10.17.
 */
$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
});
