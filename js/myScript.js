function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}


$(document).ready(function() {
    $("#contactForm").on("submit", function(e) {
        e.preventDefault();

        $.ajax({
            url: "https://ralphanthonymabao.github.io/send_email.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(response) {
                $(".status").text("Message sent successfully!").css("color", "green").fadeIn();
                $("#contactForm")[0].reset();
            },
            error: function() {
                $(".status").text("An error occurred. Please try again.").css("color", "red").fadeIn();
            }
        });
    });
});


