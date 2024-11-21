using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models.api;
using Data.api;

namespace Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargoController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public CargoController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Cargo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cargo>>> GetCargos()
        {
            return await _context.Cargos
                                 .Include(c => c.Funcionarios) // Inclui os funcionários para calcular QuantidadePessoas
                                 .ToListAsync();
        }

        // GET: api/Cargo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cargo>> GetCargo(int id)
        {
            var cargo = await _context.Cargos
                                      .Include(c => c.Funcionarios)
                                      .FirstOrDefaultAsync(c => c.Id == id);

            if (cargo == null)
            {
                return NotFound();
            }

            return cargo;
        }

        // POST: api/Cargo
        [HttpPost]
        public async Task<ActionResult<Cargo>> CreateCargo(Cargo cargo)
        {
            _context.Cargos.Add(cargo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCargo), new { id = cargo.Id }, cargo);
        }

        // PUT: api/Cargo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCargo(int id, Cargo cargo)
        {
            if (id != cargo.Id)
            {
                return BadRequest();
            }

            _context.Entry(cargo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CargoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Cargo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCargo(int id)
        {
            var cargo = await _context.Cargos.FindAsync(id);
            if (cargo == null)
            {
                return NotFound();
            }

            _context.Cargos.Remove(cargo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Método auxiliar para verificar se o cargo existe
        private bool CargoExists(int id)
        {
            return _context.Cargos.Any(c => c.Id == id);
        }
    }
}
