import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css";

import Home from './pages/Home'
import JobsCard from './components/JobCard';
import NotFoundPage from './NotFoundPage';
import JobDetails from './pages/JobDetails';
import AddJob from './components/AddJob';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/jobs',
    element: <Home />
  },
  {
    path: '/job/add',
    element: <AddJob />
  },
  {
    path: '/jobs/:jobId',
    element: <JobDetails />
  }
])


function App() {
  return (
    <div className="App">
      <h1 className="App-header">Bidding Market Place</h1>
      <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
      {/* <table className='table'>
        <tbody>
          {data.getJobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.description}</td>
              <td>{job.requirement}</td>
              <td>{job.posterName}</td>
          </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
