import { useEffect, useState } from "react";

const Research = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/research.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">This is the research page</h1>
      <div>
        {data.map((item) => (
          <div key={item.id} className="flex gap-4  my-4 p-3 border  shadow-sm">
            <div>
              <img
                className="w-[200px] h-[150px]"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold"> {item.name}</h2>

              <p>{item.description}</p>
              <p>
                <span className="font-semibold">Role:</span> {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
