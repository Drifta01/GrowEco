export default function Error({ Error }: { Error: string }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{Error}</p>
    </div>
  );
}
