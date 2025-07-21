import data from "./data.json";

export default function BoxConcept() {
  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <div className="boxes" key={index}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <p>
            postId: {item.postId} | id: {item.id}
          </p>
        </div>
      ))}
    </div>
  );
}
