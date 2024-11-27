using System;
using AutoMapper;
using DTOs.api;
using Models.api;
using Data.api;

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

            // Ajuste no mapeamento de Cliente para ClienteDto
            CreateMap<Cliente, ClienteDto>()
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status ? ClienteStatus.Ativo : ClienteStatus.Inativo));

            // Ajuste no mapeamento de Funcionario para FuncionarioDto
            CreateMap<Funcionario, FuncionarioDto>()
           .ForMember(dest => dest.ClienteId, opt => opt.MapFrom(src => src.ClienteId != 0 ? src.ClienteId : (int?)null));

        }
    }
}