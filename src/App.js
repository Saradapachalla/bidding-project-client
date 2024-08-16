import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import NotFoundPage from "./NotFoundPage";
import JobDetails from './pages/JobDetails'
import Top10Bids from "./pages/Top10Bids";
import Recent10JobsPosted from "./pages/Recent10JobsPosted";
import AddJob from "./components/AddJob";

// Graphql client setup
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/jobs",
    element: <Home />,
  },
  {
    path: "/job/add",
    element: <AddJob />,
  },
  {
    path: "/jobs/:jobId",
    element: <JobDetails />,
  },
  {
    path: "/jobs/top10bids",
    element: <Top10Bids />,
  },
  {
    path: "/jobs/recent10Jobs",
    element: <Recent10JobsPosted />,
  },
]);

function App() {
  return (
    <div className="App">
      <h2 className="App-header">
        <a href="/" className="appHeaderLink">
          Bidding Market Place
        </a>
      </h2>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </div>
  );
}

export default App;
