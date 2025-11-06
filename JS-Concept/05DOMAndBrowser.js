// Q1: What is the DOM, and what are the most common ways to select and change elements?

/* 

The DOM stands for Document Object Model. It's the browser's in-memory, tree-like representation of an HTML document. JavaScript doesn't interact with the raw HTML file; it interacts with this DOM object.

To select elements (querying):

    document.getElementById('elementId'): The fastest method. Selects one element by its unique ID.

    document.querySelector('css-selector'): The most versatile method. It uses any CSS selector (like .myClass, #myId, div > p) and returns the first matching element.

    document.querySelectorAll('css-selector'): Similar to querySelector, but it returns a NodeList (like an array) of all matching elements.

To change elements (manipulating):

    element.textContent = 'New text': Changes the text inside an element. This is safe as it doesn't parse HTML.

    element.innerHTML = '<strong>New HTML</strong>': Changes the HTML inside an element. This is powerful but can be a security risk (XSS attacks) if you insert unsanitized user input.

    element.setAttribute('href', 'https://new-link.com'): Changes an element's attribute.

    element.style.color = 'blue': Changes the element's inline CSS styles.

    element.classList.add('new-class'): A better way to change styles by adding or removing CSS classes.


Follow-up Questions:

    What is the difference between innerHTML and textContent? Which one is safer to use with user data?

    What is a document fragment, and why would you use it when adding many elements to the DOM?

    What's the difference between a NodeList (from querySelectorAll) and an HTMLCollection (from getElementsByClassName)?

*/


// Q2: What is the difference between Event Bubbling and Event Capturing?

/* 

When you click on an element (like a button) that is inside another element (like a div), the event actually fires in three phases.

    Capturing Phase: The event "travels down" from the window to the document, to the <body>, to the <div>, and finally to the <button>.

    Target Phase: The event fires on the actual target element (the <button>).

    Bubbling Phase: The event "bubbles up" from the <button> back to the <div>, to the <body>, to the document, and finally to the window.

By default, all event listeners in modern browsers run in the bubbling phase.

    Bubbling: An event on a child element will also trigger listeners on all its parent elements, from the inside out.

    Capturing: The event triggers listeners on parent elements first, from the outside in.

You almost always use bubbling. If you wanted to use capturing, you would set the third argument of addEventListener to true: element.addEventListener('click', myFunction, true).

Follow-up Questions:

    Which phase does addEventListener use by default?

    How can you stop an event from bubbling up to its parent elements? (Answer: event.stopPropagation()).

    When would you ever want to use event capturing? (Answer: It's rare, but sometimes used for logging or to stop an event before it even reaches the target).

*/


// Q3: What is event delegation, and why is it useful?

/* 

Event delegation is a pattern where you use event bubbling to your advantage.

Instead of adding an event listener to every single child element in a list, you add one single event listener to their parent container.

When a child is clicked (e.g., an <li> in a <ul>), the event bubbles up to the parent (<ul>). The parent's listener then inspects the event.target property to figure out which child was actually clicked.


Why it's useful:

    Performance: You have only one event listener instead of hundreds or thousands. This saves a lot of memory.

    Dynamic Elements: This is the most important part. If you add new child elements to the parent (e.g., adding a new item to a to-do list), the event listener automatically works for them because the listener is on the parent, which was always there.


Follow-up Questions:

    Inside the parent's event listener, what's the difference between event.target and event.currentTarget?

    Can you write a small code snippet to show how you would check which child was clicked using event delegation?

    What is a potential downside of event delegation?

*/


// Q4: What is the BOM, and how is it different from the DOM?

/* 

The DOM (Document Object Model) represents the HTML document (document).

The BOM (Browser Object Model) represents the browser window and all its related features (window).

The BOM is the parent object of the DOM. The window object is the top-level, global object in a browser. The document object is actually just one of its properties: window.document.

The BOM gives you access to browser features outside the webpage content, such as:

    window.location: Get the current URL or redirect the user (window.location.href = ...).

    window.navigator: Get information about the browser (like the user agent).

    window.history: Programmatically go back or forward (history.back()).

    window.screen: Get details about the user's screen resolution.

    Functions like alert(), confirm(), prompt(), setTimeout(), and setInterval().

*/


// Q5: What are the differences between LocalStorage, SessionStorage, and Cookies?

/* 

localStorage: 

    localStorage is used to store data in the browser permanently (until it’s manually cleared).

    The data persists even after the browser is closed and reopened.

    It can only store string data (you can use JSON.stringify() / JSON.parse() for objects).

    The storage limit is usually around 5–10 MB depending on the browser.

    Data is stored per domain (only accessible to pages on the same domain).

sessionStorage: 

    sessionStorage is similar to localStorage, but its data is only available for one browser tab or window.

    The data is cleared automatically when the tab or window is closed.

    It’s useful for temporary data, like form inputs or state during a single session.

    Same storage limit as localStorage (~5–10 MB).

Cookies: 

    Cookies are small pieces of data (around 4 KB max) stored in the browser.

    They can be sent automatically with every HTTP request, which makes them useful for authentication or tracking.

    They can have an expiry time and can be set to be accessible only via HTTP (HttpOnly) for security.

    They’re older and less efficient than localStorage or sessionStorage for storing large amounts of data.
*/

