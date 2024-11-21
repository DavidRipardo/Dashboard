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
    public class CargosController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IMapper _mapper;

        public CargosController(ApplicationDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CargoDto>> GetCargos()
        {
            var cargos = _context.Cargos.ToList();
            var cargosDto = _mapper.Map<IEnumerable<CargoDto>>(cargos);
            return Ok(cargosDto);
        }
    }
}

