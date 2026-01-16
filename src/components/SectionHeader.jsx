const SectionHeader = ({ kicker, title, description }) => {
  return (
    <div className="space-y-3">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="text-sm text-muted sm:text-base">{description}</p> : null}
    </div>
  );
};

export default SectionHeader;
