const signup = document.getElementById("racer-form");

signup.addEventListener("click", function() {
    alert("sumn' happened");

    const form = document.createElement("form");
    form.innerHTML = `
        <label>
            <input type="text" name="name" placeholder="Enter your name">
            <input type="text" name="surname" placeholder="Enter your surname">
            <input type="number" name="age" placeholder="Enter your age">
            <input type="email" name="email" placeholder="Enter your email address">
        </label>
        <br>
        <button class="submit-btn">Submit</button>
    `;

    // Append form below the button or wherever you'd like
    signup.parentElement.appendChild(form);
});
