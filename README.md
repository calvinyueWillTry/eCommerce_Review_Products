# E-Commerce-Website
A Full-Stack MERN E-Commerce application

* [Usage](#Usage)
* [License](#license)

* [React](#react)

* [Contact](#contact)
* [Homepage](#home)
* [CSS](#css)

* [Backend](#backend)
* [review](#review)

## Usage

[Navigate to the website here.](https://austin-marlatt-portfolio.netlify.app/Portfolio)
@@ -30,3 +34,11 @@ Check out the other projects I have worked on at [Austin-Marlatt](https://github
This Web Application serves as a portfolio and Resume. It utilizes React /  Vite, as well as react-bootstrap components, to be able to render a page to upload items (including pictures, price, and title/description) to sell, and purchase other items already there.
 
 ## License

  This project is licenseed under MIT.

 ## React
 For the front end, some react-bootstrap components were installed and imported to files, to allow usage on the front page. This include the Carousels, on both the review and products page (iPhones only). The Carousels needed to be contained, and then adding the components of the individual parts (labled <Carousel.PartName(/)>) of what was being displayed in the Carousel. This included <Carousel.Item> and <Carousel.Caption/>.
 Another was Nav, Navbar, NavDropdown . This included <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 and <Navbar.Collapse id="responsive-navbar-nav">, which allows for the "Hamburger Menu" to be utilized on the page, for any and all screens. The <Nav.Link> contains the href being sought (defined in main.jsx) and the text Name that appears on this </Nav.Link>;
 Form, Button, Alert on reviewForm.jsx. This allowed a Form to be created, allowing components to be rendered on the page. Form.Label allows for written text, and Form.Control allows one to include functions to be called within to allow value to be taken. The Button also allows for functions to get called by its verson of an "event listener"; 
 Accordion allows a title "button" to open a dropdown by clicking on the text within the Accordian. 
<img width="1280" alt="Screen Shot 2024-07-29 at 5 02 10 AM" src="https://github.com/user-attachments/assets/f33d921a-dfe1-4f50-9baf-16e188bd477e">
<img width="1280" alt="Screen Shot 2024-07-29 at 5 02 31 AM" src="https://github.com/user-attachments/assets/6321a720-3c14-4451-aa62-3ad8e3d4981d">

## contact
Every value input on the page is given a useState("") to track the changes made to those when something is inputted. While "Name*", "Phone Number", "Email*", and "Message" all track text values, the "subject" gives one limited value options that they can select from. When the "Send" button is clicked, then it calls the contactClick function (starting from line 10). This will take all the values inputted, and then the function contactSubmit (line 36) will compile them into an email to be sent in a new tab, via Outlook, Gmail, etc. as well as send the user back to the homepage, and then reset the vaules to their initial values. 
<img width="1280" alt="Screen Shot 2024-07-29 at 5 03 44 AM" src="https://github.com/user-attachments/assets/fe0989ce-d071-4d4e-97b5-ba9ee0a8fb8e">

## home
I added links for the team's Github profiles, as well as access to the other rendition with the mostly working backend.
<img width="1280" alt="Screen Shot 2024-07-29 at 4 59 41 AM" src="https://github.com/user-attachments/assets/56c99760-753f-436d-8d77-c323738d38e1">

## css 
While some could be generically imported from style.css, for other pages, it required its own css file to be able to have effects. Given that the containers limited where the cards on the page could be, it ended up being easier to make the items within the <div></div> to be wrapped into a row, so that the Accordions, "add to cart" button, and price, could be in a row to the Product, so limiting the empty space on the page. 
In general, I added styling (text-align: center, font-size: larger, etc.) to make it more visually appealing.
<img width="1055" alt="Screen Shot 2024-07-29 at 5 05 06 AM" src="https://github.com/user-attachments/assets/0146492c-11b0-481f-bafa-e4ee998dda21">

## backend
I built the Review model to have a product as the key, then authors (name) and description (textarea). Then in typeDefs, the type Query is review: Review, which contains 
{ _id: ID
  product: String!
  authors: String
  description: String!}
(only authors and _id are not required. All are string data)
The type Mutation will add the following to Review (addReview): product: String!, authors: String, description: String!): Review. In resolvers.js, for the Query, it takes in the data in args, then findOne within the Review model (args being the value inputted). In Apollo Server, it does find the first one, but doesn't produce anything beyond the first entry. 
The Mutation: takes in args and create based on the Review model. In Apollo Server, this works each time. <img width="1280" alt="Screen Shot 2024-07-29 at 5 15 17 AM" src="https://github.com/user-attachments/assets/637bb9bb-3f45-44da-af6a-45643c56b6c0">

## review
The reviews page contains a carousel of hard-coded reviews by teammates and instructors. 
For the Products review input field, function handleFeedbackChange updates the userName (takes in user's name) and userFormationData (store the user's review input) and states (setUserName && setUserFormationData), according to the value inputted in those respective text boxes. 
When the submit button is pressed, function handleFormatSubmission is called, which prevents the default form submission behavior, manages form validity (const [validation] = useState(false); form validation), and will add the review to the database using the addReview mutation. The reviews are added as an array of event target values, and then the boxes are reset. 
<img width="1057" alt="Screen Shot 2024-07-29 at 5 07 02 AM" src="https://github.com/user-attachments/assets/b2459edf-dadd-4334-864c-be6e21ff17bf">
<img width="1055" alt="Screen Shot 2024-07-29 at 5 07 18 AM" src="https://github.com/user-attachments/assets/625fec6b-b757-4578-abc2-eed135e1739d">
