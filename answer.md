## 1. What happens between typing a URL and seeing the page?

When I enter a URL in the browser, the browser identifies the
destination server and uses DNS to resolve the domain name to an IP
address if necessary.

The browser establishes a connection to the server and sends an HTTP
request. The server returns an HTTP response containing a status code
and, for a successful page request, usually HTML.

The browser parses the HTML and discovers resources such as CSS,
JavaScript, and images. It fetches the required resources, builds the
page structure, calculates layout, and paints the page on the screen.

## 2. What is the difference between padding and margin?

Padding is the space between an element's content and its border.

Margin is the space outside an element's border, separating it from
neighboring elements.

In my project, I use padding inside employee cards to create space
around their content. I use margin to create space between sections
and headings.

## 3. When should I use Flexbox and when should I use Grid?

Flexbox is useful for arranging items along one primary axis, either
a row or a column.

I use Flexbox for the header because it arranges the page title and
navigation and distributes space between them.

CSS Grid is useful for two-dimensional layouts involving rows and
columns.

I use Grid for the employee cards because I need three columns on
desktop and one column on mobile.

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

The explanations are ready to use, but make sure you understand them well enough to explain them without reading the file.