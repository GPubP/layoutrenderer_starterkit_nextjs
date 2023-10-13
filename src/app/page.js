import Renderer from '@/components/Renderer';

export default function Home() {
  return (
    <div style={{ padding: '100px' }}>
      <h1 className="u-margin-bottom">LayoutRenderer - NextJS Starterkit</h1>
      <ul>
        <li className="u-margin-bottom-xs">
          <a href="/redactie">Example 1 - LayoutRenderer met GraphQL & Redactie integratie voorbeeld</a>
        </li>
        <li className="u-margin-bottom-xs">
          <a href="/provider">Example 2 - LayoutRenderer met statisch LayoutProvider voorbeeld</a>
        </li>
      </ul>
    </div>
  );
}
