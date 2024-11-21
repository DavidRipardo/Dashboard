using System;
using Microsoft.EntityFrameworkCore;
using Models.api;

namespace Data.api
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions)
        { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Cargo> Cargos { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }
        public DbSet<Tarefa> Tarefas { get; set; }
        public DbSet<User> Users { get; set; }

    }
}