using System;

namespace Models.api
{
    public class Tarefa
    {
        public int Id { get; set; }
        public required string Descricao { get; set; } = string.Empty;
        public bool Finalizada { get; set; } = true;
        public int FuncionarioId { get; set; }
        public required Funcionario Funcionario { get; set; } // Relacionamento com Funcionario
    }
}
