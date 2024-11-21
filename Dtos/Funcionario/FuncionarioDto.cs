using System;

namespace DTOs.api
{
    public class FuncionarioDto
    {
        public string Nome { get; set; } = string.Empty;
        public string Cargo { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public bool Status { get; set; }
    }
}
