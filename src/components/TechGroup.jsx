const TechGroup = ({ title, items, emphasis = false }) => {
  return (
    <div
      className={`card h-full ${
        emphasis ? 'border-accent/40 shadow-glow' : 'border-white/10'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        {emphasis ? (
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Kern</span>
        ) : null}
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
