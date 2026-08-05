export default function JsonLd({ data }) {
  if (!data) return null;

  return (
    <>
      {Array.isArray(data) ? (
        data.map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      )}
    </>
  );
}
