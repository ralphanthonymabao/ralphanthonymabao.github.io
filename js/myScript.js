function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}


// Example using jQuery AJAX to send the form data
$(document).ready(function() {
    $("#contactForm").submit(function(e) {
        e.preventDefault();  // Prevent the default form submission

        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

        $.ajax({
            url: "https://ralphanthonymabao.github.io/send_email.php",  // Update the URL to your PHP script
            type: "POST",
            contentType: "application/json",  // Sending data as JSON
            data: JSON.stringify(formData),  // Convert form data to JSON
            success: function(response) {
                // Handle the response
                var res = JSON.parse(response);
                if (res.status == "success") {
                    alert(res.message);  // Show success message
                } else {
                    alert(res.message);  // Show error message
                }
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error("Error: " + xhr.status + " " + xhr.statusText);
            }
        });
    });
});

