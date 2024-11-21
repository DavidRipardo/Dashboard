using System;
using AutoMapper;
using DTOs.api;
using Models.api;

namespace Mappings.api
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Mapeamento para clientes e funcionários
            CreateMap<Cliente, ClienteDto>();
            CreateMap<Funcionario, FuncionarioDto>();

            // Mapeamento para tarefas
            CreateMap<Tarefa, TarefaDto>();

            // Mapeamento para cargos e funcionários relacionados
            CreateMap<Cargo, CargoDto>()
                .ForMember(dest => dest.Funcionarios, opt => opt.MapFrom(src => src.Funcionarios));
        }
    }
}

