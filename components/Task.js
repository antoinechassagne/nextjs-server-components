import dayjs from "dayjs";

export default function Task({ task }) {
  return (
    <p>
      {task.label} - {dayjs(task.date).format("DD/MM/YYYY")}
    </p>
  );
}
