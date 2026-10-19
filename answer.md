## 1. What happens between typing a URL and seeing the page?

The browser finds the server using DNS.
The browser sends a request to the server.
The server sends back a response containing the webpage.
The browser reads the HTML, CSS, and JavaScript.
The browser displays the webpage on the screen.

## 2. What is the difference between padding and margin?

Padding: The space inside an element, between its content and border.

Margin: The space outside an element, between it and other elements.

## 3. When should I use Flexbox and when should I use Grid?

**Flexbox:** Used to arrange elements in a row or column. In my project, I use Flexbox to arrange the header title and navigation.

**Grid:** Used to arrange elements in rows and columns. In my project, I use Grid to display employee cards in 3 columns on desktop and 1 column on mobile.

## 4. Why use <label for>?

The for attribute connects a label to a form input whose id matches
the for value.

This improves accessibility because assistive technologies can
identify the input's label. Clicking the label also focuses the
associated input.

For example:

<label for="employee-name">Full Name</label>
<input id="employee-name" name="employeeName" required>

## 5. What do HTTP 404 and 500 mean?

HTTP 404 Not Found means the server cannot find the requested
resource.

HTTP 500 Internal Server Error means the server encountered an
unexpected condition that prevented it from fulfilling the request.

A 404 usually indicates that the requested resource could not be
found, while a 500 indicates a server-side failure.

