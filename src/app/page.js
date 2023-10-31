import Renderer from '@/components/Renderer';

export default function Home() {
  return (
    <div style={{ padding: '100px' }}>
      <h1 className="u-margin-bottom">LayoutRenderer - NextJS Starterkit</h1>
      <p className="u-margin-bottom">
        Het eerste voorbeeld toont hoe de LayoutRenderer connectie kan leggen met een GraphQL store. Via die GraphQL
        store wordt de titel van een website uit de redactie gehaald. Deze titel wordt vervolgens in een AlertWidget
        gerenderd. Zet je ENV variabelen in de .env file om dit voorbeeld correct te laten werken. Het tweede voorbeeld
        toont hoe je de layout kan definieren via LayoutProvider rules. Deze rules worden achtereenvolgens uitgevoerd
        tot er 1 rule matcht.
      </p>
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
