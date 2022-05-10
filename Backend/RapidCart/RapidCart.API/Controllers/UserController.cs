using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using RapidCart.Core;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RapidCart.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: api/<UserController>
        [HttpGet]
        [Route("/api/[controller]/{id}", Name = "GetUser")]
        public IActionResult GetUser(int id)
        {
            var user = _userRepository.Get(id);
            if (user.Success)
            {
                return Ok(user.Data);
            }
            else
            {
                return BadRequest(user.Message);
            }
        }

        // [Response<User> Insert(User user);
        // Response Update(User user);
        // Response Delete(int userId);
        [HttpPut, Authorize]
        public IActionResult UpdateUser([FromBody] ViewUser viewUser)
        {
            if (ModelState.IsValid && viewUser.UserId > 0)
            {
                var user = new User()
                {
                    UserId = viewUser.UserId,
                    FirstName = viewUser.FirstName,
                    LastName = viewUser.LastName,
                     = viewUser.DateOfBirth,
                    Height = viewUser.Height
                };
            
                var userToUpdate = _userRepository.Get(user.UserId);
                if (userToUpdate == null)
                {
                    return NotFound();
                }

                var result = _userRepository.Update(user);
                if (result.Success)
                {
                    return Ok("User updated successfully");
                }
                else
                {
                    return BadRequest(result.Message);
                }
            }
            else
            {
                if(viewUser.userId < 1)
                    ModelState.AddModelError("userId", "Invalid User Id");
                return BadRequest(ModelState);
            }
            }
        }
    }
}
