using System;

namespace DTOs.api
{
    public class TarefaDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty; // "Em Andamento", "Finalizada"
        public DateTime DataCriacao { get; set; }
    }
}
