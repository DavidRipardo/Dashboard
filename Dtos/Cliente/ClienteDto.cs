using System;

namespace DTOs.api
{
    public class ClienteDto
    {
        public string Nome { get; set; } = string.Empty;
        public string Servico { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public bool Status { get; set; }
    }
}
