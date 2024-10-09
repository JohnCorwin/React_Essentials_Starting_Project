function CoreConcept({ title, description, image }) {
    return (<li>
        <img src={image} alt={title} />
        <h3>{ title }</h3>
        <div>{ description }</div>
    </li>);
}

export default CoreConcept
