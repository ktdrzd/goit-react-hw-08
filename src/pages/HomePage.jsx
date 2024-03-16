import DocumentTitle from '../components/DocumentTitle/DocumentTitle';
import Welcome from '../components/Welcome/Welcome';


export default function HomePage() {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <Welcome />
    </div>
  );
}
