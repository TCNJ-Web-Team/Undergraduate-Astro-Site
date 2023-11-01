import React from "react";

interface MyComponentProps {
  data: any;
}
// export default function ProgramList() {
//   return (
//     <div className="program-wrapper">
//       <p>Test wrapper</p>
//     </div>
//   );
// }

const ProgramList: React.FC<MyComponentProps> = ({ data }) => {
  // component implementation
  // console.log(data.programs.nodes);
  const programs = data.programs.nodes;
  // console.log(programs);
  return (
    <div className="program-wrapper">
      <p>Test</p>
      {programs.map((program: any) => {
        return <p>{program.title}</p>;
      })}
    </div>
  );
};
export default ProgramList;
