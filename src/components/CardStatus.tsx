import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import imgUsuarios from "/src/assets/usercard.png";
import imgClientes from "/src/assets/clientescard.png";
import imgCargos from "/src/assets/cargoscard.png";
import imgCardfuncionario from "/src/assets/funcionariocard.png";

interface CardStatusProps {
  totalUsers: number;
  totalClients: number;
  totalOffices: number;
  totalTasks: number;
}

export function CardStatus({ totalUsers, totalClients, totalOffices, totalTasks }: CardStatusProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const statsData = [
    { count: totalUsers, title: "Usuários", description: "Total de usuários cadastrados", icon: imgUsuarios, animation: "zoom-in" },
    { count: totalClients, title: "Clientes", description: "Total de clientes cadastrados", icon: imgClientes, animation: "flip-left" },
    { count: totalOffices, title: "Cargos", description: "Total de cargos cadastrados", icon: imgCargos, animation: "zoom-in-down" },
    { count: totalTasks, title: "Tarefas", description: "Total de tarefas cadastradas", icon: imgCardfuncionario, animation: "flip-right" },
  ];

  return (
    <section className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {statsData.map((stat, index) => (
        <div
          key={index}
          data-aos={stat.animation}
          data-aos-delay={index * 300}
          className="flex justify-between items-center px-3 py-6 bg-white border border-gray-200 rounded-2xl shadow-md w-full"
        >
          <div className="flex flex-col">
            <span className="text-padrao2 text-5xl font-nunito mb-4">{stat.count}</span>
            <h3 className="text-lg font-bold mb-3">{stat.title}</h3>
            <p className="text-base w-[130%] font-normal">{stat.description}</p>
          </div>
          <img src={stat.icon} alt={stat.title} className="w-36 h-36 relative right-3" />
        </div>
      ))}
    </section>
  );
}
