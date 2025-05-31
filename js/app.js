const signup = document.getElementById("racer-form");
signup.addEventListener("click", function(){
    const form = document.createElement("form");
        form.innerHTML = `
            <label>
                <input type="checkbox">
            </label>
            <button class="submit-btn">Submit</button>
            `;
})