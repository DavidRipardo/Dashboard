import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import imgcardtarefas from "/src/assets/tarefascard.png";
import imgcardAndamento from "/src/assets/andamentocard.png";
import imgcardfinish from "/src/assets/finalizadascard.png";

interface Task {
  status: string;
}

const tasks: Task[] = [
  { status: "Para fazer" },
  { status: "Feito" },
  { status: "Fazendo" },
  // Adicione mais tarefas conforme necessário
];

export function TaskCard() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duração da animação em milissegundos
    });
  }, []);

  const taskStats = [
    {
      count: tasks.filter((task) => task.status === "Para fazer").length,
      title: "Tarefas",
      description: "Lista de tarefas requisitadas",
      icon: imgcardtarefas,
      animation: "zoom-in", // Animação específica para este card
    },
    {
      count: tasks.filter((task) => task.status === "Feito").length,
      title: "Tarefas finalizadas",
      description: "Lista de tarefas finalizadas",
      icon: imgcardAndamento,
      animation: "flip-left", // Animação específica para este card
    },
    {
      count: tasks.filter((task) => task.status === "Fazendo").length,
      title: "Tarefas em andamento",
      description: "Lista de tarefas em andamento",
      icon: imgcardfinish,
      animation: "zoom-in-down", // Animação específica para este card
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mb-7">
      {taskStats.map((task, index) => (
        <div
          key={index}
          className="flex flex-col pl-3 py-4 h-[80%] w-[100%] bg-white shadow-xl rounded-2xl"
          data-aos={task.animation}
          data-aos-delay={index * 300} // Delay crescente para cada card
        >
          <div className="flex flex-col">
            <div className="text-4xl text-padrao2 font-bold">{task.count}</div>
            <div className="text-lg font-semibold">{task.title}</div>
            <div className="text-gray-600">{task.description}</div>
            <img
              src={task.icon}
              alt={task.title}
              className="w-36 h-36 relative bottom-14 left-[55%]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;
