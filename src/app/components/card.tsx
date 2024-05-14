// components/CardComponent.js
// components/CardComponent.js
const CardComponent = ({ dynamicFields, aggiungiCampo }) => {
  return (
    <div className="card p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-bold mb-2">Card Principale</h2>
      {dynamicFields.map((campo, index) => (
        <div key={index} className="bg-gray-100 p-2 rounded mb-2">
          {campo}
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
