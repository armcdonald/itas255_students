import { getCourse } from "../api/api";

export default function Course() {
  const progId = "TAT-SN-270";
  const courseId = "SN-270-W01";

  const { name, desc, instructor } = getCourse({ progId, courseId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{instructor.name}</h4>
      <span>
        {instructor.title} at {instructor.org}
      </span>
      <p>{instructor.bio}</p>
    </>
  );
}