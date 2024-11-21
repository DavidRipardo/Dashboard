using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using DTOs.api;
using Models.api;
using Data.api;
using System.Collections.Generic;
using System.Linq;

namespace Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IMapper _mapper;

        public PessoasController(ApplicationDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("clientes")]
        public ActionResult<IEnumerable<ClienteDto>> GetClientes()
        {
            var clientes = _context.Clientes.ToList();
            var clientesDto = _mapper.Map<IEnumerable<ClienteDto>>(clientes);
            return Ok(clientesDto);
        }

        [HttpGet("funcionarios")]
        public ActionResult<IEnumerable<FuncionarioDto>> GetFuncionarios()
        {
            var funcionarios = _context.Funcionarios.ToList();
            var funcionariosDto = _mapper.Map<IEnumerable<FuncionarioDto>>(funcionarios);
            return Ok(funcionariosDto);
        }
    }
}

