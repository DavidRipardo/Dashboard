using System;
using System.Collections.Generic;

namespace Models.api
{
    public class Cliente
    {
        public int Id { get; set; }
        public required string Nome { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;
        public required string Telefone { get; set; } = string.Empty;
        public required string CPF { get; set; } = string.Empty;
        public required string Servico { get; set; } = string.Empty;
        public bool Status { get; set; } = true;
        public ICollection<Funcionario> Funcionarios { get; set; } = new List<Funcionario>(); // Relacionamento com Funcionário
    }
}
