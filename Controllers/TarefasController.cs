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
    public class TarefasController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IMapper _mapper;

        public TarefasController(ApplicationDBContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TarefaDto>> GetTarefas()
        {
            var tarefas = _context.Tarefas.ToList();
            var tarefasDto = _mapper.Map<IEnumerable<TarefaDto>>(tarefas);
            return Ok(tarefasDto);
        }

        [HttpGet("em-andamento")]
        public ActionResult<IEnumerable<TarefaDto>> GetTarefasEmAndamento()
        {
            // Busca as tarefas que NÃO estão finalizadas (Finalizada == false)
            var tarefas = _context.Tarefas.Where(t => !t.Finalizada).ToList();
            var tarefasDto = _mapper.Map<IEnumerable<TarefaDto>>(tarefas);
            return Ok(tarefasDto);
        }

        [HttpGet("finalizadas")]
        public ActionResult<IEnumerable<TarefaDto>> GetTarefasFinalizadas()
        {
            // Busca as tarefas que estão finalizadas (Finalizada == true)
            var tarefas = _context.Tarefas.Where(t => t.Finalizada).ToList();
            var tarefasDto = _mapper.Map<IEnumerable<TarefaDto>>(tarefas);
            return Ok(tarefasDto);
        }
    }
}
