// Add a New Item to a Nested Array
// Question: Add 'Node.js' to the skills array of the developer Alice.
 const team =
  [
     { 
        name: 'Alice', 
        skills: ['HTML', 'CSS', 'JavaScript'],
        },
    { 
        name: 'Bob',
        skills: ['Java', 'Spring Boot'], 
    }, 
];
const updatedTeam = team.map(member => 
    member.name === "Alice"
        ? { ...member, skills: [...member.skills, "Node.js"] }
        : member
);

console.log(updatedTeam);
