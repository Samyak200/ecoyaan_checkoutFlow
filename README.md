Ecoyaan Checkout Flow - Frontend Assignment
This is a functional 3-step checkout flow built for the Ecoyaan interview process. The goal was to create a seamless transition from the cart to final payment while ensuring data persistence and clean UI.

"ARCHITECHTURAL DECISIONS"

1. Framework: Next.js (App Router)
I chose the Next.js App Router to leverage Server Components. This allowed me to handle the initial data fetching on the server-side (SSR), ensuring the "Order Summary" is ready as soon as the page loads, satisfying the technical requirement for SSR.

2. State Management: Zustand
I opted for Zustand because it is lightweight and much easier to set up than Redux. Unlike the Context API, Zustand prevents unnecessary re-renders of the entire page when a user types in the shipping form. It effectively holds the cart items and shipping address in a global store so the data isn't lost when navigating between steps.

3. Styling: Tailwind CSS
I used Tailwind CSS to build a modern, responsive interface. It helped me ensure that the checkout flow looks great on both mobile devices and large desktop screens with minimal CSS bloat.

4. Form Validation
I implemented custom validation for the Shipping screen. The form ensures that:
The Email is in a valid format.
The Phone Number is exactly 10 digits.
The PIN Code is exactly 6 digits.
This prevents the user from proceeding with incorrect information.

"TO RUN LOCALLY"

cd frontend
npm install
npm run dev

View in Browser:
Go to http://localhost:3000/cart to see the checkout flow in action.

view in vercel:

ecoyaancheckoutflow.vercel.app

"PROJECT OVERVIEW"

/cart: Fetches mock product data via SSR and displays the initial summary.

/shipping: Collects user details with real-time validation.

/payment: Final review of the order and simulated payment success state.

/store: Centralized Zustand store managing the application state.
