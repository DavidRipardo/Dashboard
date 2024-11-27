using System;
using System.Collections.Generic;

namespace Models.api
{
    public class Funcionario
    {
        public int Id { get; set; }
        public required string Nome { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;
        public required string Telefone { get; set; } = string.Empty;
        public required string CPF { get; set; } = string.Empty;
        public int CargoId { get; set; }
        public  required Cargo Cargo { get; set; } // Relacionamento com Cargo
        public int ClienteId { get; set; }
        public required Cliente Cliente { get; set; } // Relacionamento com Cliente
        public bool Status { get; set; } = true;
    }
}
