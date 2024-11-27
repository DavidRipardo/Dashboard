using System;

namespace DTOs.api
{
    public enum TarefaStatus
    {
        EmAndamento,
        Finalizada
    }

    public class TarefaDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public TarefaStatus Status { get; set; }
        public DateTime DataCriacao { get; set; }
    }

}
