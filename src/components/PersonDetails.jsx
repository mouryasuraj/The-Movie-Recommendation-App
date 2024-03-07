import { useParams } from "react-router-dom";

const PersonDetails = () => {
  const { person_name, person_id } = useParams();
  return (
    <div className="pt-[100px]">
      <h1 className="text-3xl text-slate-200">{person_name}</h1>
      <h1 className="text-3xl text-slate-200">{person_id}</h1>
    </div>
  );
};

export default PersonDetails;
