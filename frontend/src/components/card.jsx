import React from 'react';

const members = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    position: 'Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Brown',
    position: 'Designer',
    image: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {members.map((member, index) => (
        <div key={index} className="max-w-sm mx-5 my-5 bg-white rounded-xl shadow-md overflow-hidden">
          <img className="h-48 w-full object-cover object-center" src={member.image} alt={member.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{member.name}</div>
            <p className="text-gray-700 text-base">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
