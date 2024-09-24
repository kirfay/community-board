const ResourceCard = ({ title, description, link, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="button" href={link} target="_blank" rel="noopener noreferrer">View Menu</a>
      </div>
    );
  };
  
  export default ResourceCard;