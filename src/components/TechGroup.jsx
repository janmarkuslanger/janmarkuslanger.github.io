const TechGroup = ({ title, items }) => {
  return (
    <div className="card h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechGroup;
