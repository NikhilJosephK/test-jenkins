export function Component({ data }) {
  return (
    <div className="flex">
      {data.map((item) => {
        return (
          <a
            href={`/blog/${item.title}`}
            key={item.id}
          >
            {item.title}
          </a>
        );
      })}
    </div>
  );
}
