using System;
using System.Collections.Generic;

namespace Models.api
{
    public class Cargo
    {
        public int Id { get; set; }
        public required string Nome { get; set; } = string.Empty;
        public ICollection<Funcionario> Funcionarios { get; set; } = new List<Funcionario>(); // Relacionamento com Funcionário

        public int QuantidadePessoas => Funcionarios.Count; // Propriedade para quantidade de pessoas no cargo
    }
}
