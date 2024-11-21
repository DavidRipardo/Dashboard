using System;
using System.ComponentModel.DataAnnotations;

namespace Models.api
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public required string Nome { get; set; } = string.Empty;

        [Required]
        public required string Email { get; set; } = string.Empty;

        [Required]
        public required string Password { get; set; } = string.Empty;

        public string Role { get; set; } = string.Empty; // Ex: "Admin", "User"
    }
}
