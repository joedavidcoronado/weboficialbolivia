import PlaceHolderWait from '../components/PlaceHolderWait';

export default function ResourcesPage() {
  return (
    <main style={{ padding: '80px 0' }}>
      <PlaceHolderWait 
        title="Página en camino" 
        subtitle="Estamos desarrollando esta página lo más rapido posible. Si quieres mas información sobre este tema, puedes acceder al siguiente link"
        link='https://www.bahai.org/library/' 
        linkLabel="Recursos Bahá'ís - Bahai.org"
      />
    </main>
  );
}