// Selecting the color picker button and other elements
const colorPickerBtn = document.querySelector("#color-picker");
const colorList = document.querySelector(".all-colors");

// Initialize the picked color to an empty string
let pickedColor = '';

// Function to copy the color code to clipboard and update the element text
const copyColor = (elem) => {
    // Indicate that the color code has been copied
    elem.innerText = "Copied";

    // Copy the color code to the clipboard
    navigator.clipboard.writeText(pickedColor);

    // After a delay, revert back to the original color code
    setTimeout(() => elem.innerText = pickedColor, 1000);
}

// Function to display the picked color
const showColor = () => {
    if (pickedColor) {
        // Display the picked color in the color list
        colorList.innerHTML = `
            <li class="color">
                <span class="rect" style="background: ${pickedColor}; border: 1px solid ${pickedColor == "#ffffff" ? "#ccc" : pickedColor}"></span>
                <span class="value hex" data-color="${pickedColor}">${pickedColor}</span>
            </li>
        `;

        // Show the section containing the picked color
        document.querySelector(".picked-colors").classList.remove("hide");

        // Add a click event listener to the color element to copy the color code
        const colorElement = document.querySelector(".color");
        colorElement.addEventListener("click", () => copyColor(colorElement.querySelector(".value")));
    } else {
        // Hide the color list if there's no picked color
        colorList.innerHTML = '';
        document.querySelector(".picked-colors").classList.add("hide");
    }
}

// Initially display the picked color
showColor();

// Function to activate the eye dropper tool for color picking
const activateEyeDropper = () => {
    // Hide the body temporarily while using the eye dropper
    document.body.style.display = "block";

    // Wait for a short delay before executing the eye dropper functionality
    setTimeout(async () => {
        try {
            // Open the eye dropper and get the selected color
            const eyeDropper = new EyeDropper();
            const { sRGBHex } = await eyeDropper.open();

            // Set the picked color
            pickedColor = sRGBHex;
            showColor();

            // Copy the selected color code to the clipboard
            navigator.clipboard.writeText(pickedColor);
        } catch (error) {
            // Display an alert if color copying fails
            alert("Failed to copy the color code!");
        }

        // Restore body visibility after using the eye dropper
        document.body.style.display = "block";
    }, 10);
}

// Add event listeners for the clear-all button and the color picker button


colorPickerBtn.addEventListener("click", activateEyeDropper);
