const ServiceCard = ({ title, description }) => {
  return (
    <div className="card h-full transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-3 text-sm text-muted">{description}</p>
    </div>
  );
};

export default ServiceCard;
