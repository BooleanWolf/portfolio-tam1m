import React, { useEffect, useState } from "react";

const Educations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample education data
  const educations = [
    { id: 1, degree: "SSC", institution: "Agrani School and College", year: "2018", result: "GPA 5.00 (1225/1300)" },
    { id: 2, degree: "HSC", institution: "Rajshahi College", year: "2020", result: "GPA 5.00" },
    { id: 3, degree: "B.Sc", institution: "Mechanical Engineering, BUET", year: "Ongoing", result: "" },
    // Add more education records as needed
  ];

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setData(educations);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div>
       
        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Degree</th>
                <th className="px-4 py-2">Institution</th>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {data.map((education) => (
                <tr key={education.id}>
                  <td className="border px-4 py-2">{education.degree}</td>
                  <td className="border px-4 py-2">{education.institution}</td>
                  <td className="border px-4 py-2">{education.year}</td>
                  <td className="border px-4 py-2">{education.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Educations;
