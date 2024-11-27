using System;

namespace DTOs.api
{
    public class FuncionarioDto
    {
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public string CPF { get; set; } = string.Empty; // Garantir validação antes de usar
        public int CargoId { get; set; }
        public int? ClienteId { get; set; } // Nullable, se aplicável
        public bool Status { get; set; } = true;
    }



}
