import TasksList from "../components/TasksList";

const tasks = [
  {
    id: 1,
    date: "2021-01-01",
    label: "Tâche n°1",
  },
  {
    id: 2,
    date: "2021-02-02",
    label: "Tâche n°2",
  },
  ,
  {
    id: 3,
    date: "2021-03-03",
    label: "Tâche n°3",
  },
];

export default function Home() {
  return (
    <div>
      <h1>Liste de tâches</h1>
      <TasksList tasks={tasks} />
    </div>
  );
}
