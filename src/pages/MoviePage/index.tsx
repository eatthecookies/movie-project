import { useParams } from "react-router";

export default function MoviePage() {
  const params = useParams();
  return <div>MoviePage {params.id}</div>;
}
