# Color-Picker-Chrome-Extension

project components:

index.html: This file represents the main structure of the web application. It contains a color picker popup that consists of a button to trigger color picking and a section to display picked colors.

style.css: This file contains the styling for the color picker popup. It uses the Google Font "Poppins" for text, defines the appearance of the color picker button, picked colors display, and the layout of the elements.

script.js: This JavaScript file provides the functionality of the color picker. It does the following:

Initializes the pickedColor variable to store the currently selected color.
Defines a function copyColor to copy the color code to the clipboard and show a "Copied" message temporarily.
Defines a function showColor to display the picked color in the color list.
Initializes the picked color display using the showColor function.
Defines a function activateEyeDropper to activate the browser's eye dropper tool to pick colors from the screen.
Adds an event listener to the color picker button to activate the eye dropper tool when clicked.


manifest.json: This JSON file defines the metadata for a browser extension. It describes the extension's name, description, version, and default popup (which is your index.html file). It also includes icons of different sizes for the extension's appearance in the browser.

The overall project is a simple color picker web application that allows users to pick colors from the screen using the browser's eye dropper tool. When the user clicks the "Pick Color" button, the eye dropper tool is activated, and the selected color is displayed in the color list along with its code. The color code can be copied to the clipboard by clicking on the displayed color. The project also provides a browser extension component with the manifest file, which could be used to package and distribute the color picker as a browser extension.
