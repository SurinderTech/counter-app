# counter-app
# Counter App (HTML + CSS + JavaScript)

A simple **Counter App** built using plain **HTML, CSS, and JavaScript**.  
You can increase, decrease, and reset a number displayed on the screen.

---

## 🎯 Features

- Display current count
- **Increase** button
- **Decrease** button
- **Reset** button
- Basic responsive design with clean UI

---

## 📁 Project Structure

```text
counter-app/
│
├─ index.html      # Main UI
├─ style.css       # All styling
└─ script.js       # Counter logic
🛠 How It Works
index.html
Contains:

A heading / title

A number display (e.g., <span id="count">0</span>)

Buttons: Increase, Decrease, Reset

style.css
Handles:

Centering the app

Fonts, colors, button styles

Hover effects (optional)

script.js
Logic:

Get the counter element and buttons using document.getElementById(...)

Maintain a let count = 0

On button click:

Increase → count++

Decrease → count--

Reset → count = 0

Update the UI: countElement.textContent = count

▶️ How to Run
Download or clone the project.

Make sure these three files are in the same folder:

index.html

style.css

script.js

Open index.html in any web browser (Chrome, Edge, Firefox, etc.).

Click the buttons to change the counter.

