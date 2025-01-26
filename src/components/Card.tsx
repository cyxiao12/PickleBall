export const Card = ({
  title,
  description,
}: {
  title: string;
  description: { text: string; show: boolean };
}) => {
  console.log(title);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {description.show && (
        <p className="text-sm text-gray-500">{description.text}</p>
      )}
    </div>
  );
};
