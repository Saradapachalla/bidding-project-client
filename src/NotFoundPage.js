import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="Error-page">
      <h2>404 Page Not Found</h2>
      <h2><Link to={"/"}> Home</Link> </h2>
    </div>
  );
}
