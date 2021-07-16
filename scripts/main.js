const myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';
/*Note: The reason the instructions (above) place the <script> element*/ 
/*near the bottom of the HTML file is that the browser reads code in the order it appears in the file.*/
/*If the JavaScript loads first and it is supposed to affect the HTML that hasn't loaded yet, */
/*there could be problems.*/ 
/*Placing JavaScript near the bottom of an HTML page is one way to accommodate this dependency.*/ 
/*To learn more about alternative approaches, see Script loading strategies.*/