import React from "react";

const Table = ({ users }) => {
  if (users.length === 0) return null;

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Gender</th>
                <th className="px-6 py-4">Language</th>
                <th className="px-6 py-4">Email</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">
                    {user.language.join(", ")}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Table;
