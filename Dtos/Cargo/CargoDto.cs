using System;
using System.Collections.Generic;

namespace DTOs.api
{
    public class CargoDto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public List<FuncionarioDto> Funcionarios { get; set; } = new List<FuncionarioDto>();
    }
}
