const ResourceCard = ({ title, description, link }) => {
    return (
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    );
  };
  
  export default ResourceCard;