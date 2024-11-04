import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Pagina no encontrada </h1>
      <Link to="/">Home</Link>
    </div>
  );
}
